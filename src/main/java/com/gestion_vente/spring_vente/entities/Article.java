package com.gestion_vente.spring_vente.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@DynamicUpdate
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String name ;
    private String type ;
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image ;
    @Column(length = 10000000)
    private String descp ;
    private String color ;
    private Integer stockage ;
    private Long prix ;
    private LocalDate date ;
    private Integer qte_total ;//nbre unité
    private Integer qte_restant;//unité restante

    /* Article en même temps est  PARENT de BASKET il doit avoir fetch = FetchType.Lazy (ou pas de fetch) pour permettre qu'on supprime son ENFANT Basket.*/
    /* et CascadeType.ALL pour permettre qu'on le supprime lui même et qu'il supprime tout les relations dans son ENFANT baskets.*/
    @JsonIgnore
    @OneToMany(
            mappedBy = "article",
            cascade = CascadeType.ALL /*sinon si c'est {.PERSIST,.MERGE} la suppression de PARENT  ne marchera pas
            s'il a des liaisons avec ces enfant. et la suppression du PARENT sera alors
             géré manuellement avec les helpers methodes*/
    )
    private List<Basket> baskets = new ArrayList<>();

    /* on privilégie tjrs le JsonIgnore du côté du ToOne. Sauf pour des raisons particuliers */
    /* Il est ENFANT la seule 1er regle est que sont PARENT CATEGORY ne doit pas avoir FetchType.EAGER */
    @JsonIgnore
    @ManyToOne(
            fetch = FetchType.EAGER,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            }
    )
    @JoinColumn(name="categorie_id")
    private Category category ;

    public void addBasket(Basket basket){
        baskets.add(basket);
        basket.setArticle(this);
    }

    public void removeBasket(Basket basket){
        baskets.remove(basket);
        basket.setArticle(null);
    }



}
