package com.gestion_vente.spring_vente.service;

import com.gestion_vente.spring_vente.entities.Article;
import com.gestion_vente.spring_vente.entities.Category;
import com.gestion_vente.spring_vente.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category update(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> saveAllCategories(List<Category> categories) {
        return categoryRepository.saveAll(categories);
    }

    @Override
    public List<Category> updateAllCategories(List<Category> categories) {
        return categoryRepository.saveAll(categories);
    }

    @Override
    public List<Category> findAllCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Long id) {

        Category category = categoryRepository.findById(id).orElse(null);

        if(category.getArticles() != null) {
            List<Article> articles = new ArrayList<>(category.getArticles());

            articles.forEach(article -> {
                category.removeArticle(article);
            });
        }

        categoryRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        categoryRepository.deleteAll();
    }
}
