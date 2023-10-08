package com.gestion_vente.spring_vente.restcontroller;

import com.gestion_vente.spring_vente.entities.Category;
import com.gestion_vente.spring_vente.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController implements CategoryService {

    @Autowired
    private CategoryService categoryService ;

    @PostMapping("/save")
    public Category save(@RequestBody  Category category) {
        return categoryService.save(category);
    }

    @PutMapping("/update")
    public Category update(@RequestBody Category category) {
        return categoryService.update(category);
    }

    @PostMapping("/save-all")
    public List<Category> saveAllCategories(@RequestBody List<Category> categories) {
        return categoryService.saveAllCategories(categories);
    }

    @PutMapping("/update-all")
    public List<Category> updateAllCategories(@RequestBody List<Category> categories) {
        return categoryService.updateAllCategories(categories);
    }
    @GetMapping("/find-all")
    public List<Category> findAllCategory() {
        return categoryService.findAllCategory();
    }

    @GetMapping("/find/{id}")
    public Category findById(@PathVariable  Long id) {
        return categoryService.findById(id);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id) {
        categoryService.deleteById(id);
    }
   @DeleteMapping("/delete-all")
    public void deleteAll() {
        categoryService.deleteAll();
    }
}
