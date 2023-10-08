package com.gestion_vente.spring_vente.repository;

import com.gestion_vente.spring_vente.entities.Basket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BasketRepository extends JpaRepository<Basket,Long> {
    public List<Basket> findByUserId(Long id) ;
    public Basket findByUserIdAndArticleId(Long userId,Long articleId) ;

}
