package com.gestion_vente.spring_vente.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Data
@DynamicUpdate
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String nom  ;

    // Category est le  parent  car on a  ...ToMany articles. donc la clé étrangère va être créer sur l'ENFANT article.
    // Category ne doit pas avoir .EAGER pour permettre a l'enfant d'être supprimé.
    @OneToMany(mappedBy = "category",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL /*sinon si c'est {.PERSIST,.MERGE} la suppression de PARENT  ne marchera pas
            s'il a des liaisons avec ces enfant. et la suppression du PARENT sera alors géré manuellement avec les helpers methodes*/
    )
    private List<Article> articles = new ArrayList<>();

    public void addArticle(Article article){
        articles.add(article);
        article.setCategory(this);
    }
    public void removeArticle(Article article){
        articles.remove(article) ;
        article.setCategory(null);
    }
}
