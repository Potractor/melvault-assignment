package com.example.backend.entity;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Table(name="cart")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
  @Id
  @GeneratedValue(strategy =GenerationType.IDENTITY )
  private Long id;
  @JsonManagedReference
  @OneToMany(mappedBy="cart",cascade=CascadeType.ALL)
  private List<Item> items;
  
  @JsonBackReference
  @OneToOne
  @JoinColumn(name="user_id",referencedColumnName="id")
  private User user;
}
