package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.dto.UserInfoDto;
import com.example.backend.entity.Cart;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
  
  @Autowired
  private UserService userService;
  
  
  @GetMapping("{id}")
  public ResponseEntity<UserInfoDto> getUserById(@PathVariable Long id) { 
    return new ResponseEntity<>(userService.getUserById(id),HttpStatus.OK);
  }
  @GetMapping("{id}/favourites")
  public ResponseEntity<Object> getUserFavouritesById(@PathVariable Long id) { 
    return new ResponseEntity<>(userService.getUserFavouritesById(id),HttpStatus.OK);
  }
  @GetMapping("{id}/favourites-info")
  public ResponseEntity<Object> getUserFavouritesInfoById(@PathVariable Long id) { 
    return new ResponseEntity<>(userService.getUserFavouritesInfo(id),HttpStatus.OK);
  }
  
  @PostMapping("{id}/add-favourites/{productId}/product")
  public ResponseEntity<String> addProductToFavourites(@PathVariable Long id, @PathVariable Long productId){
    try { 
    userService.addProductToFavourites(id,productId);
    return new ResponseEntity<>("Added successfully",HttpStatus.OK);
    }
    catch (Exception e) { 
      return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @PostMapping("{id}/remove-favourites/{productId}/product")
  public ResponseEntity<String> deleteProductFromFavourites(@PathVariable Long id, @PathVariable Long productId){
    try { 
    userService.removeProductFromFavourites(id,productId);
    return new ResponseEntity<>("Added successfully",HttpStatus.OK);
    }
    catch (Exception e) { 
      return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @PostMapping("/{id}/empty-cart")
  public ResponseEntity<String> emptyCartById(@PathVariable Long id) { 
    try { 
      userService.emptyCartById(id);
      return new ResponseEntity<>("Empty cart successfull",HttpStatus.NO_CONTENT);
    }
    catch (Exception e) { 
      return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
  
  @PostMapping("/{id}/create-cart")
  public ResponseEntity<Cart> createCartById(@PathVariable Long id){
    return new ResponseEntity<>(userService.createCartById(id),HttpStatus.CREATED);
  }
}
