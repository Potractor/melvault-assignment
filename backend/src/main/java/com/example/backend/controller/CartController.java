package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.entity.Cart;
import com.example.backend.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
  
  @Autowired
  private CartService cartService;
  
  @GetMapping("/user/{userId}")
  public ResponseEntity<Cart> getCartById(@PathVariable Long userId){
    return new ResponseEntity<>(cartService.getCartByUserId(userId),HttpStatus.OK);
  }
  
  @GetMapping("{id}")
  public ResponseEntity<Cart> getCart(@PathVariable Long id) { 
    return new ResponseEntity<>(cartService.getCart(id),HttpStatus.OK);
  }
  
  @PostMapping("/update")
  public ResponseEntity<Cart> updateCart(@RequestBody Cart cart){
    return new ResponseEntity<>(cartService.updateCart(cart),HttpStatus.OK);
  }
  
  @PostMapping("{cartId}/add-item/{id}")
  public ResponseEntity<Cart> addItemToCart(@PathVariable Long id,@PathVariable Long cartId) { 
    return new ResponseEntity<>(cartService.addItemToCart(id,cartId,1),HttpStatus.OK);
  }
}
