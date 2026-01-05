package com.example.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.dto.UserInfoDto;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.repository.CartRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import com.example.backend.entity.Cart;
import com.example.backend.entity.User;
@Service
public class UserServiceImpl implements UserService {
  
  @Autowired 
  private UserRepository userRepository;
  @Autowired
  private CartRepository cartRepository;
  @Override
  public UserInfoDto getUserById(Long id) {
    // TODO Auto-generated method stub
    User user = userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("id not found"));
    UserInfoDto userInfo = new  UserInfoDto();
    userInfo.setId(user.getId());
    userInfo.setCart(user.getCart());
    userInfo.setEmail(user.getEmail());
    userInfo.setName(user.getName());
    userInfo.setRoles(user.getRoles());
    userInfo.setUsername(user.getUsername());
    return userInfo;
  }
  @Override
  public void emptyCartById(Long id) {
    // TODO Auto-generated method stub
    User user = userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("id not found"));
    user.setCart(null);
    userRepository.save(user);
    
  }
  
  @Override 
  public Cart getCartById(Long userId) { 
    User user = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("id not found"));
    if(user.getCart()==null)
      {return createCartById(userId);
     
      }
    return user.getCart();
  }
  @Override
  public Cart createCartById(Long id) {
    // TODO Auto-generated method stub
    User user = userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("id not found"));
    Cart cart = new Cart();
    cart.setUser(user);
    Cart savedCart = cartRepository.save(cart);
    user.setCart(savedCart);
    userRepository.save(user);
    return savedCart;
  }
}
