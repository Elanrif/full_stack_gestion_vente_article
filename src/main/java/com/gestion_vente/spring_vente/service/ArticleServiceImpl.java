package com.gestion_vente.spring_vente.service;

import com.gestion_vente.spring_vente.entities.Article;
import com.gestion_vente.spring_vente.entities.Basket;
import com.gestion_vente.spring_vente.entities.Category;
import com.gestion_vente.spring_vente.entities.User;
import com.gestion_vente.spring_vente.repository.ArticleRepository;
import com.gestion_vente.spring_vente.repository.CategoryRepository;
import com.gestion_vente.spring_vente.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService{
    @Autowired
    private ArticleRepository articleRepository ;
    @Autowired
    private CategoryRepository categoryRepository ;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Article saveArticle(Article article, MultipartFile image) {
        if(image !=null){

            String fileName = StringUtils.cleanPath(image.getOriginalFilename());
            if(fileName.contains(".."))
            {
                System.out.println("Ficher non valide.");
            }

            try {
                article.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        /*synchronisé les relations entre Article et Category*/
        if(article.getCategory() !=null){

            Category category = categoryRepository.findById(article.getCategory().getId()).orElse(null) ;
            category.addArticle(article) ; //helpers methodes

        }
        //grâce au cascade suffit d'enregistrer un.
        return articleRepository.save(article);
    }

    @Override
    public Article updateArticle(Article article, MultipartFile image) {
        if(image !=null){

            String fileName = StringUtils.cleanPath(image.getOriginalFilename());
            if(fileName.contains(".."))
            {
                System.out.println("Ficher non valide.");
            }

            try {
                article.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            Article u = articleRepository.findById(article.getId()).get();  /* j'avais par défaut : .orElse(null)*/
            article.setImage(u.getImage());
            System.out.println("************** USER WITH IMAGE : **************** " + u.getImage());
        }

        /*synchronisé les relations entre Article et Category*/
        if(article.getCategory() !=null){

            Category category = categoryRepository.findById(article.getCategory().getId()).orElse(null) ;
            category.addArticle(article) ; //hepers methodes

        }
        //grâce au cascade suffit d'enregistrer un.
        return articleRepository.save(article);
    }

    /*exécuter seulement sur PostMan pour générer des données*/
    @Override
    public List<Article> saveAllArticles(List<Article> articles) {

        List<Article> artles = new ArrayList<>();

        for(Article article : articles){

            if(article.getCategory() !=null){

                Category category = categoryRepository.findById(article.getCategory().getId()).orElse(null) ;
                category.addArticle(article) ; //hepers methodes
                artles.add(article) ;
            }
        }

        return articleRepository.saveAll(artles);
    }

    @Override
    public List<Article> updateAllArticles(List<Article> articles) {
        List<Article> artles = new ArrayList<>();

        for(Article article : articles){

            if(article.getCategory() !=null){

                Category category = categoryRepository.findById(article.getCategory().getId()).orElse(null) ;
                category.addArticle(article) ; //hepers methodes
                artles.add(article) ;
            }
        }

        return articleRepository.saveAll(artles);
    }

    @Override
    public Article findOneArticle(Long id) {
        return articleRepository.findById(id).orElse(null);
    }

    @Override
    public List<Article> findAllArticles() {
        return articleRepository.findAll();
    }

    @Override
    public List<Article> findByNameContainingOrDescpContaining(String name,String descp) {
        return articleRepository.findByNameContainingOrDescpContaining(name,descp);
    }

    @Override
    public List<Article> findAllByOrderByNameAsc() {
        return articleRepository.findAllByOrderByNameAsc();
    }

    @Override
    public List<Article> findAllByOrderByNameDesc() {
        return articleRepository.findAllByOrderByNameDesc();
    }

    @Override
    public List<Article> findAllByOrderByDateAsc() {
        return articleRepository.findAllByOrderByDateAsc();
    }

    @Override
    public List<Article> findAllByOrderByDateDesc() {
        return articleRepository.findAllByOrderByDateDesc();
    }

    /*Article à a fois est ENFANT de Category et PARENT de Basket */
    @Override
    public void deleteArticleById(Long id) {
        //avant suppression on va supprimer tout les relations.
        Article article = articleRepository.findById(id).orElse(null) ;

        //permet de desynchronisé la relation (vu que .MERGE, .PERSIST ne marche pas pour la suppression
        if(article.getCategory() !=null) {

             Category category = article.getCategory() ;
             category.removeArticle(article);

        }

        if(article.getBaskets() != null) {

            List<Basket> baskets = new ArrayList<>(article.getBaskets());

            baskets.forEach(basket -> {

                article.removeBasket(basket);
            });
        }

        articleRepository.deleteById(id);
    }
    @Override
    public void deleteAllArticle() {
        articleRepository.deleteAll();
    }

    @Override
    public List<Article> findByCategoryId(Long id) {
        return articleRepository.findByCategoryId(id);
    }

}
