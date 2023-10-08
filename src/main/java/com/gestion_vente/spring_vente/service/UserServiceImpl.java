package com.gestion_vente.spring_vente.service;

import com.gestion_vente.spring_vente.entities.Basket;
import com.gestion_vente.spring_vente.entities.User;
import com.gestion_vente.spring_vente.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository ;

    @Override
    public User login(User user) {
        User userOne = userRepository.findOneByEmail(user.getEmail()) ;

        /* pour les String on utilise equals et non == ou !== */
        if(userOne !=null && user.getPassword().equals(userOne.getPassword())){

            return userOne ;
        }
        return null;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUserBasketForm(User user) {

        //pour update tjrs aller chercher dans la BDD, comme ça avec userRepository.save JPA ferra l'update car l'id de userInfo existe
        User userInfo = userRepository.findById(user.getId()).orElse(null) ;
        /* on s'assure que le USER a bien un id, pour que ses infos soit modifié*/
        if(userInfo != null) {
            userInfo.setAdresse(user.getAdresse());
            userInfo.setVille(user.getVille());
            userInfo.setRegion(user.getRegion());
            userInfo.setAnotherPhone(user.getAnotherPhone());
            userRepository.save(userInfo) ;
        }
        return null;
    }

    @Override
    public User updateUserWithImg(User user, MultipartFile image) {
        if(image !=null){

            String fileName = StringUtils.cleanPath(image.getOriginalFilename());
            if(fileName.contains(".."))
            {
                System.out.println("Ficher non valide.");
            }

            try {
                user.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            User u = userRepository.findById(user.getId()).get();  /* j'avais par défaut : .orElse(null)*/
            user.setImage(u.getImage());
            System.out.println("************** USER WITH IMAGE : **************** " + u.getImage());
        }

        return userRepository.save(user);
    }

    @Override
    public List<User> saveAllUser(List<User> users) {
        return userRepository.saveAll(users);
    }


    @Override
    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUserById(Long id) {

        User user = userRepository.findById(id).orElse(null);

        if(user.getBaskets() != null) {

            List<Basket> baskets = new ArrayList<>(user.getBaskets());

            baskets.forEach(basket->{

                user.removeBasket(basket);

            });

        }
        userRepository.deleteById(id);
    }

    @Override
    public void deleteAllUsers() {

        userRepository.deleteAll();
    }

    @Override
    public List<User> findByFirstNameContainingOrLastNameContaining(String firstName, String lastName) {
        return userRepository.findByFirstNameContainingOrLastNameContaining(firstName,lastName);
    }
}
