package com.gestion_vente.spring_vente.service;

import com.gestion_vente.spring_vente.entities.Basket;
import com.gestion_vente.spring_vente.repository.BasketRepository;

import java.util.List;

public interface BasketService {

    //on les utilise sur le FRONT, basket contient les table user et article.
    public Basket save(Basket basket) ;
    public Basket update(Basket basket) ;
    public List<Basket> update_v(List<Basket> baskets);

    //on utilise ça pour les test , peuvent être utilisé sur FRONT (mais on ne les utilise pas sur FRONT)
    public Basket save_v2(Basket basket, Long userId,Long articleId) ;
    public Basket update_v2(Basket basket, Long userId,Long articleId) ;
    public Basket findBasket(Long id) ;
    public List<Basket> findAllBaskets() ;
    public List<Basket> findByUserId(Long id) ;
    public void deleteBasketById(Long id) ;

    public void deleteAll();

    /*permettre de prendre un user et article id, et returner true or false s'il y'a déjà un tuple {user_id,article_id}*/
    public boolean findByUserIdAndArticleId(Long userId,Long articleId);
}
