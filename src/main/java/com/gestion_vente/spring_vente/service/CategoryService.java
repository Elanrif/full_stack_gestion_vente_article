package com.gestion_vente.spring_vente.service;

import com.gestion_vente.spring_vente.entities.Category;

import java.util.List;

public interface CategoryService {

    public Category save(Category category) ;
    public Category update(Category category) ;
    public List<Category> saveAllCategories(List<Category> categories) ;
    public List<Category> updateAllCategories(List<Category> categories) ;
    public List<Category> findAllCategory();
    public Category findById(Long id) ;
    public void deleteById(Long id);
    public void deleteAll();
}
