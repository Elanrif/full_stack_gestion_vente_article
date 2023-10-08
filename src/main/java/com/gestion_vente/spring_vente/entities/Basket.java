package com.gestion_vente.spring_vente.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;

@Data
@DynamicUpdate
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table( uniqueConstraints = @UniqueConstraint(columnNames = {"article_id", "user_id"}))
public class Basket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    private Long prix_unitaire ;
    private Long prix_total;
    private Integer qte_article;
    private LocalDate date ;

    /* .MERGE et .PERSIST vont marché car les 2 PARENT n'ont pas de fetch = FetchType.EAGER */
    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            }
    )
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            }
    )
    @JoinColumn(name="article_id")
    private Article article ;


}
