package com.example.backend.service;

import com.example.backend.dto.UserInfoDto;
import com.example.backend.entity.Cart;

public interface UserService {
  public UserInfoDto getUserById(Long id);
  public void emptyCartById(Long id);
  public Cart createCartById(Long id);
  public Cart getCartById(Long userId);
}
