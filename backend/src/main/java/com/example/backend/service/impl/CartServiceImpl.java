package com.example.backend.service.impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.entity.Cart;
import com.example.backend.entity.Item;
import com.example.backend.entity.Product;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.repository.CartRepository;
import com.example.backend.repository.ItemRepository;
import com.example.backend.repository.ProductRepository;
import com.example.backend.service.CartService;
import com.example.backend.service.UserService;

@Service
public class CartServiceImpl implements CartService {

  @Autowired
  private CartRepository cartRepository;
  @Autowired
  private UserService userService;
  @Autowired
  private ProductRepository productRepository;
  @Autowired
  private ItemRepository itemRepository;
  
  @Override
  public Cart getCartByUserId(Long userId) {
    // TODO Auto-generated method stub
    return userService.getCartById(userId);
  }

  @Override
  public Cart updateCart(Cart cart) {
    // TODO Auto-generated method stub
    Cart currCart = cartRepository.findById(cart.getId()).orElseThrow(()->new ResourceNotFoundException("Item not found"));
    List<Item> currItems = new ArrayList<>();
    cart.getItems().forEach(item->{
      Item currItem = new Item();
      currItem.setCart(currCart);
      currItem.setCount(item.getCount());
      currItem.setId(item.getId());
      currItem.setImageUrl(item.getImageUrl());
      currItem.setName(item.getName());
      currItem.setPrice(item.getPrice());
      currItem.setProductId(item.getProductId());
      Item savedItem = itemRepository.save(currItem);
      currItems.add(savedItem);
    });
    currCart.setItems(currItems);
    return cartRepository.save(currCart);
  }
  
//  @Override
//  public Cart increaseCartItem(Item item ,Long cartid) {
//    Item currItem = item.findById()
//  }

  @Override
  public Cart getCart(Long id) {
    // TODO Auto-generated method stub
    return cartRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Item not found"));
  }

  @Override
  public Cart addItemToCart(Long id,Long cartId,int count) {
    // TODO Auto-generated method stub
    Product product = productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("product not found"));
    Item item = new Item();
    Cart cart = cartRepository.findById(cartId).orElseThrow(()->new ResourceNotFoundException("Item not found"));
    item.setCart(cart);
    item.setCount(count);
    item.setProductId(product.getId());
    item.setImageUrl(product.getFiles().get(0).getFileUrl());
    item.setPrice(product.getNewPrice());
    item.setName(product.getName());
    Item savedItem = itemRepository.save(item);
    List<Item> l = cart.getItems();
    l.add(savedItem);
    cart.setItems(l);
    Cart savedCart = cartRepository.save(cart);
    return savedCart;
  }
}
