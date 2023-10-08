package com.gestion_vente.spring_vente.repository;

import com.gestion_vente.spring_vente.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {

}
