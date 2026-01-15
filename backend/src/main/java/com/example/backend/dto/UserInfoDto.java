package com.example.backend.dto;
import java.util.Set;
import com.example.backend.entity.Cart;
import com.example.backend.entity.Product;
import com.example.backend.entity.Role;
import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoDto {
  private Long id;
  private String username;
  private String name;
  private String email;
  private Set<Role> roles;
  private Cart cart;
  private Set<Long>favourites;
}
