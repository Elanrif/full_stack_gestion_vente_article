package com.gestion_vente.spring_vente.repository;
import com.gestion_vente.spring_vente.entities.Article;
import com.gestion_vente.spring_vente.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {
    List<Article> findByNameContainingOrDescpContaining(String name,String descp) ;
    List<Article> findByCategoryId(Long id) ;
    List<Article> findAllByOrderByNameAsc();
    List<Article> findAllByOrderByNameDesc();
    List<Article> findAllByOrderByDateDesc();
    List<Article> findAllByOrderByDateAsc();

}
