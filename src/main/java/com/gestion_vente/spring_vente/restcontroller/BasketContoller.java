package com.gestion_vente.spring_vente.restcontroller;

import com.gestion_vente.spring_vente.entities.Article;
import com.gestion_vente.spring_vente.entities.Basket;
import com.gestion_vente.spring_vente.entities.User;
import com.gestion_vente.spring_vente.repository.ArticleRepository;
import com.gestion_vente.spring_vente.repository.BasketRepository;
import com.gestion_vente.spring_vente.repository.UserRepository;
import com.gestion_vente.spring_vente.service.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/basket")
@CrossOrigin
public class BasketContoller  {

    @Autowired
    private BasketService basketService ;
    @Autowired
    private BasketRepository basketRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ArticleRepository articleRepository;

    /* basket ne doit pas avoir un id, mais juste contenir les id des autres entités en relation .Voir sur FrontEnd REACT  */
    @PostMapping("/add-shopping-cart")
    public Basket save(@RequestBody  Basket basket) {

        return basketService.save(basket);
    }


    @PutMapping("/update-shopping-cart")
    public Basket update(@RequestBody  Basket basket) {
        /* update , donc basket doit avoir un id , et contenir les id des autres entités en relation. Voir sur FrontEnd REACT*/
        return basketService.update(basket);
    }

    @PutMapping("/update-v")
    public List<Basket> updateAll(@RequestBody List<Basket> baskets){

        return basketService.update_v(baskets) ;
    }

  /* on les utilises seulement en TEST , sur REACT on utilise celle d'en haut. on a juste fait un choix.mais les deux approches marche.*/
    @PostMapping("/add-shopping-cart-v2/{user_id}/{article_id}")
    public Basket save_v2(@RequestBody  Basket basket,@PathVariable("user_id")Long userId,
                            @PathVariable("article_id") Long articleId) {

        return basketService.save_v2(basket,userId,articleId) ;
    }


    @PutMapping("/update-shopping-cart-v2/{user_id}/{article_id}")
    public Basket update_v2(@RequestBody  Basket basket,@PathVariable("user_id")Long userId,
                            @PathVariable("article_id") Long articleId) {

        return basketService.update_v2(basket,userId,articleId) ;
    }

    @GetMapping("/find/{id}")
    public Basket findBasket(@PathVariable Long id) {
        return basketService.findBasket(id);
    }

    @GetMapping("/find-all")
    public List<Basket> findAllBaskets() {
        return basketService.findAllBaskets();
    }

    @GetMapping("/find-basket-from-user/{userId}")
    public List<Basket> findByUserId(@PathVariable("userId") Long id) {
        return basketService.findByUserId(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBasketById(@PathVariable Long id) {
        basketService.deleteBasketById(id);
    }

    @GetMapping("/findByUserIdAndArticleId/{user_id}/{article_id}")
    public  boolean findByUserIdAndArticleId(@PathVariable("user_id") Long userId, @PathVariable("article_id") Long articleId){

        return basketService.findByUserIdAndArticleId(userId,articleId);
    }

    @DeleteMapping("/delete-all")
    public void deleteAll(){
        basketService.deleteAll();
    }
}
