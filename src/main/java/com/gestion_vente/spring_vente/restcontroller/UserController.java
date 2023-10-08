package com.gestion_vente.spring_vente.restcontroller;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gestion_vente.spring_vente.entities.User;
import com.gestion_vente.spring_vente.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController{

    @Autowired
    private UserService userService ;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody  User user) {
       User auth = userService.login(user);
        if(auth == null) {
            /* NOT_FOUND 404 */
            return new ResponseEntity("Veuillez vérifier vos informations", HttpStatus.NOT_FOUND) ;
        }
        return new ResponseEntity(auth, HttpStatus.OK)  ;
    }

    @PostMapping("/register")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/update-from-basket")
    public User updateUserBasketForm(@RequestBody User user) {

       return userService.updateUserBasketForm(user) ;
    }

    @PostMapping("/update-with-image")
    public User updateUserWithImg(@RequestPart("user") String user,
                                  @RequestPart(value = "image",required = false) MultipartFile image) throws JsonProcessingException {

        // Convertir la chaîne JSON en objet Association en utilisant Jackson, il ne prends pas en compte le type localDate
        ObjectMapper objectMapper = new ObjectMapper();
        User u = objectMapper.readValue(user, User.class);
        return userService.updateUserWithImg(u,image);
    }
    @PostMapping("/save-all")
    public List<User> saveAllUser(@RequestBody  List<User> users) {
        return userService.saveAllUser(users);
    }

    @GetMapping("/find/{id}")
    public User findUserById(@PathVariable Long id) {
        return userService.findUserById(id);
    }

    @GetMapping("/find-all")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable Long id) {

        userService.deleteUserById(id);
    }

    @DeleteMapping("/delete-all")
    public void deleteAllUsers() {

        userService.deleteAllUsers();
    }

    @GetMapping("/findByFirstNameContainingOrLastNameContaining")
    public List<User> findByFirstNameContainingOrLastNameContaining(@RequestParam("name") String name) {
        return userService.findByFirstNameContainingOrLastNameContaining(name,name);
    }
}
