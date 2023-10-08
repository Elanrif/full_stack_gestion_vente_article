package com.gestion_vente.spring_vente.restcontroller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gestion_vente.spring_vente.entities.Article;
import com.gestion_vente.spring_vente.entities.User;
import com.gestion_vente.spring_vente.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/article")
@CrossOrigin
public class ArticleController {

    @Autowired
    private ArticleService articleService ;

    /*j'ai fait en sorte que ces methodes peuvent contenir des articles ou pas. */
    //les 2 methodes peuvent être executer sur PostMan avec de image : null , required = false et voir + dans les services commet ç'a été gérée.
    @PostMapping("/save-with-img")
    public Article saveArticle(@RequestPart("article")  String article,
                               @RequestPart(value = "image",required = false) MultipartFile image)throws JsonProcessingException {

        ObjectMapper objectMapper = new ObjectMapper();
        Article art = objectMapper.readValue(article, Article.class);

        return articleService.saveArticle(art,image);
    }
    @PutMapping("/update-with-img")
    public Article updateArticle(@RequestPart("article") String article,
                                 @RequestPart(value = "image",required = false) MultipartFile image) throws JsonProcessingException {

        ObjectMapper objectMapper = new ObjectMapper();
        Article art = objectMapper.readValue(article, Article.class);

        return articleService.updateArticle(art,image);
    }

    /*PAS BESOIN DE CRÉER UN ENDPOINT POUR ENVOYER LA CATEGORY ET ARTICLE.
    * comme je faisait dans mes anciens PROJECT
    * j'ai fait en sorte que ces articles peut avoir dans le JSON une category ,
    * et ce dernier soit sera crée et synchronisé ou mis à jour et synchronisé avec l'article
    *
    * */
    @PostMapping("/save-all")
    public List<Article> saveAllArticles(@RequestBody List<Article> articles) {
        return articleService.saveAllArticles(articles);
    }

    @PutMapping("/update-all")
    public List<Article> updateAllArticles(@RequestBody  List<Article> articles) {
        return articleService.updateAllArticles(articles);
    }

    @GetMapping("/find/{id}")
    public Article findOneArticle(@PathVariable Long id) {
        return articleService.findOneArticle(id);
    }

    @GetMapping("/find-all")
    public List<Article> findAllArticles() {
        return articleService.findAllArticles();
    }

    @GetMapping("/findByNameContainingOrDescpContaining")
    public List<Article> findByNameContaining(@RequestParam("name") String name) {
        return articleService.findByNameContainingOrDescpContaining(name,name);
    }

    @GetMapping("/findAllByOrderByNameAsc")
    public List<Article> findAllByOrderByNameAsc() {
        return articleService.findAllByOrderByNameAsc();
    }

    @GetMapping("/findAllByOrderByNameDesc")
    public List<Article> findAllByOrderByNameDesc() {
        return articleService.findAllByOrderByNameDesc();
    }

    @GetMapping("/findAllByOrderByDateAsc")
    public List<Article> findAllByOrderByDateAsc() {
        return articleService.findAllByOrderByDateAsc();
    }
    @GetMapping("/findAllByOrderByDateDesc")
    public List<Article> findAllByOrderByDateDesc() {
        return articleService.findAllByOrderByDateDesc();
    }
    @DeleteMapping("/delete/{id}")
    public void deleteArticleById(@PathVariable Long id) {
        articleService.deleteArticleById(id);
    }

    @DeleteMapping("/delete-all")
    public void deleteAllArticle() {
        articleService.deleteAllArticle();
    }

    @GetMapping("/find-by-category/{id}")
    public List<Article> findByCategoryId(@PathVariable Long id) {
        return articleService.findByCategoryId(id);
    }


}
