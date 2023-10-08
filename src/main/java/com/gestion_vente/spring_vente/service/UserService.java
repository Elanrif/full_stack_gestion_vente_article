package com.gestion_vente.spring_vente.service;

import com.gestion_vente.spring_vente.entities.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
  public User login(User user) ;
  public User saveUser(User user) ;
  public User updateUserBasketForm(User user) ;
  public User updateUserWithImg(User user, MultipartFile image);
  public List<User> saveAllUser(List<User> users) ;
  public User findUserById(Long id) ;
  public List<User> findAllUsers() ;
  public void deleteUserById(Long id);
  public void deleteAllUsers() ;
  public List<User> findByFirstNameContainingOrLastNameContaining(String firstName, String lastName) ;

}
