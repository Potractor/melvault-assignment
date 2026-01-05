package com.example.backend.service;

import com.example.backend.entity.Cart;

public interface CartService {
  public Cart getCartByUserId(Long userId);
  
  public Cart updateCart(Cart cart);
  
  public Cart getCart(Long id);
  
  public Cart addItemToCart(Long id,Long cartId,int count);
}
