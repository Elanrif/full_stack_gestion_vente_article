package com.gestion_vente.spring_vente.restcontroller;

import com.gestion_vente.spring_vente.repository.ArticleRepository;
import com.gestion_vente.spring_vente.repository.BasketRepository;
import com.gestion_vente.spring_vente.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
@CrossOrigin
public class Test {

    @Autowired
    private BasketRepository basketRepository ;

    @Autowired
    private UserRepository userRepository ;

    @Autowired
    private ArticleRepository articleRepository ;

    @DeleteMapping("/basket-delete/{id}")
    public void deleteBasketById(@PathVariable("id") Long id){

        basketRepository.deleteById(id);
    }

    @DeleteMapping("/article-delete/{id}")
    public void deleteArticleById(@PathVariable("id") Long id){

        articleRepository.deleteById(id);
    }

    @DeleteMapping("/user-delete/{id}")
    public void deleteUserById(@PathVariable("id") Long id){

        userRepository.deleteById(id);
    }

}
