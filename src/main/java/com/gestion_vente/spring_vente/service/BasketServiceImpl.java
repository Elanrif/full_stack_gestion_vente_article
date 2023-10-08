package com.gestion_vente.spring_vente.service;

import com.gestion_vente.spring_vente.entities.Article;
import com.gestion_vente.spring_vente.entities.Basket;
import com.gestion_vente.spring_vente.entities.User;
import com.gestion_vente.spring_vente.repository.ArticleRepository;
import com.gestion_vente.spring_vente.repository.BasketRepository;
import com.gestion_vente.spring_vente.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BasketServiceImpl implements BasketService{

    @Autowired
    private UserRepository userRepository ;
    @Autowired
    private ArticleRepository articleRepository ;
    @Autowired
    private BasketRepository basketRepository  ;



    @Override
    public Basket save(Basket basket) {
        /*on a ajouté dans la classe Basket uniqueConstraints permet de ne pas avoir des données redondants des colonnes spécifiés*/
        Basket panier = null ;
        Long userId = basket.getUser().getId() ;
        Long articleId = basket.getArticle().getId() ;

        User user = userRepository.findById(userId).orElse(null);
        Article article = articleRepository.findById(articleId).get()  ;

        if(user != null && article !=null){

            //remaining : article restante.
            article.setQte_restant(article.getQte_total() - basket.getQte_article());

            /* car sur l'entié basket on a juste les id de User et Article. donc pour éviter que basket returne les
            * autres valeurs a null faire un setters
            * */
            basket.setUser(user);
            basket.setArticle(article);

            /* use helpers methodes pour la creation d'une enregistrement, pour le update (mise à jour)
             * on utilisera pas les helpers methodes car les objets déjà synchronisé.
            * */
            user.addBasket(basket);
            article.addBasket(basket);

            /* grâce aux cascade enregistrer basketRepository revient a enregistrer/mettre à jour User et Article */
          panier = basketRepository.save(basket) ;
        }

        return panier ;
    }

    //la meilleur façon de faire un update avec une entité avec des relations.
    @Override
    public Basket update(Basket basket) {

        /*basket doit avoir un id. on est dans update c'est obligatoire.*/
        Basket panier  = basketRepository.findById(basket.getId()).orElse(null) ;
        /* on vérifie que Panier a bien User et Article : plus besoin de passer les 2 autres entités car panier les a déjà. */
        if(panier.getUser() != null && panier.getArticle() != null){

            //remaining : article restante.
            panier.getArticle().setQte_restant(panier.getArticle().getQte_total() - basket.getQte_article());

            /* juste faire des setters et pas besoin de setters les infos de User et Article comme dans create.on suppose que déjà cet panier a ses infos*/
            panier.setPrix_total(basket.getPrix_total());
            panier.setDate(basket.getDate());
            panier.setPrix_unitaire(basket.getPrix_unitaire());
            panier.setQte_article(basket.getQte_article());

            /* basket doit avoir un id. pour qu'on modifie le basket sinon on va créer un nouveau basket */
            return basketRepository.save(panier) ;
        }

        return null ;
    }

    @Override
    public List<Basket> update_v(List<Basket> baskets) {

        List<Basket> updatedBaskets = new ArrayList<>();

        for (Basket basket : baskets) {

            Long userId = basket.getUser().getId();
            Long articleId = basket.getArticle().getId();

            User user = userRepository.findById(userId).orElse(null);
            Article article = articleRepository.findById(articleId).orElse(null);

            if (user != null && article != null && basket.getId() != null) {
                article.setQte_restant(article.getQte_total() - basket.getQte_article());

                basket.setUser(user);
                basket.setArticle(article);

                user.addBasket(basket);
                article.addBasket(basket);

                Basket updatedBasket = basketRepository.save(basket);
                updatedBaskets.add(updatedBasket);
            }
        }

        return updatedBaskets;
    }


    @Override
    public Basket save_v2(Basket basket, Long userId, Long articleId) {

        Basket panier = null ;
        User user = userRepository.findById(userId).orElse(null);
        Article article = articleRepository.findById(articleId).get()  ;

        if(user != null && article !=null){

            //remaining : article restante.
            article.setQte_restant(article.getQte_total() - basket.getQte_article());

            /* car sur l'entié basket on a juste les id de User et Article. donc pour éviter que basket returne les
             * autres valeurs a null faire un setters
             * */
            basket.setUser(user);
            basket.setArticle(article);

            /* use helpers methodes pour la creation d'une enregistrement, pour le update (mise à jour)
             * on utilisera pas les helpers methodes car les objets déjà synchronisé.
             * */
            user.addBasket(basket);
            article.addBasket(basket);

            /* grâce aux cascade enregistrer basketRepository revient a enregistrer/mettre à jour User et Article */
            panier = basketRepository.save(basket) ;
        }

        return panier;
    }

    @Override
    public Basket update_v2(Basket basket, Long userId, Long articleId) {

        Basket panier = null ;
        User user = userRepository.findById(userId).orElse(null);
        Article article = articleRepository.findById(articleId).get()  ;

        if(user != null && article !=null && basket.getId() !=null){

            //remaining : article restante.
            article.setQte_restant(article.getQte_total() - basket.getQte_article());

            /* car sur l'entié basket on a juste les id de User et Article. donc pour éviter que basket returne les
             * autres valeurs a null faire un setters
             * */
            basket.setUser(user);
            basket.setArticle(article);

            /* use helpers methodes pour la creation d'une enregistrement, pour le update (mise à jour)
             * on utilisera pas les helpers methodes car les objets déjà synchronisé.
             * */
            user.addBasket(basket);
            article.addBasket(basket);

            /* grâce aux cascade enregistrer basketRepository revient a enregistrer/mettre à jour User et Article */
            panier = basketRepository.save(basket) ;
        }

        return panier;
    }

    @Override
    public Basket findBasket(Long id) {
        return basketRepository.findById(id).get();
    }

    @Override
    public List<Basket> findAllBaskets() {
        return basketRepository.findAll();
    }

    @Override
    public List<Basket> findByUserId(Long id) {
        return basketRepository.findByUserId(id);
    }

    @Override
    public void deleteBasketById(Long id) {

        Basket panier = basketRepository.findById(id).orElse(null) ;


                Integer qte_total = panier.getArticle().getQte_total() ;
                Integer qte_panier = panier.getQte_article() ;

                Article article = panier.getArticle() ;

            if(article != null && panier.getQte_article() !=null){

                Integer qte_rest = article.getQte_total() - panier.getQte_article();
                article.setQte_restant(qte_rest);
                articleRepository.save(article) ;

                basketRepository.deleteById(id);

            }else{

                System.out.println("Error : something doesn't work");
            }

            /* mode MANUELLE : utiliser les helpers methodes pour supprimer les relations. *//*
             User user = panier.getUser() ;
             Article article = panier.getArticle() ;

             if(article !=null) {

                 article.removeBasket(panier);
             }

             if(user != null){
                 user.removeBasket(panier);
             }*/

    }

    @Override
    public void deleteAll() {
        basketRepository.deleteAll();
    }

    /* permet de savoir si un User a ajouté un article ou pas. */
    @Override
    public boolean findByUserIdAndArticleId(Long userId, Long articleId) {
        User user = userRepository.findById(userId).orElse(null) ;
        Article article = articleRepository.findById(articleId).orElse(null);

        /*si basket existe signifie que notre USER a déjà ajouter l'article*/
        Basket basket = basketRepository.findByUserIdAndArticleId(user.getId(),article.getId()) ;

        if(basket != null){

           return true ;
        }

        return false;
    }
}
