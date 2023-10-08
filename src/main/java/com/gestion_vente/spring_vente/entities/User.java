package com.gestion_vente.spring_vente.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    private String firstName ;
    private String lastName ;
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image ;
    @Column(unique = true)
    private String email ;
    private String phone ;
    private String anotherPhone ;
    private String region ;
    private String adresse ;
    private String ville ;
    private String password ;
    private Boolean admin = false ;

    // User est le PARENT de BASKET il doit avoir fetch = FetchType.Lazy (ou pas de fetch) par défaut .LAZY
    // pour permettre qu'on supprime son ENFANT Basket.
    @JsonIgnore
    @OneToMany(mappedBy = "user",
            cascade = CascadeType.ALL /*sinon si c'est {.PERSIST,.MERGE} la suppression de PARENT  ne marchera pas
            s'il a des liaisons avec ces enfant. et
            sera alors géré manuellement avec les helpers methodes*/
    )
    private List<Basket> baskets = new ArrayList<>() ;

    public void addBasket(Basket basket){
        baskets.add(basket);
        basket.setUser(this);
    }

    public void removeBasket(Basket basket){
        baskets.add(basket);
        basket.setUser(null);
    }

}
