package com.gestion_vente.spring_vente.service;

import com.gestion_vente.spring_vente.entities.Article;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ArticleService {
    public Article saveArticle(Article article, MultipartFile image) ;
    public Article updateArticle(Article article,MultipartFile image);
    public List<Article> saveAllArticles(List<Article> articles) ;
    public List<Article> updateAllArticles(List<Article> articles) ;
    public Article findOneArticle(Long id);
    public List<Article> findAllArticles();
    public List<Article> findByNameContainingOrDescpContaining(String name,String descp);
    List<Article> findAllByOrderByNameAsc();
    List<Article> findAllByOrderByNameDesc();
    List<Article> findAllByOrderByDateAsc();
    List<Article> findAllByOrderByDateDesc();
    public void deleteArticleById(Long id) ;
    public void deleteAllArticle() ;
    public List<Article> findByCategoryId(Long id);

}
