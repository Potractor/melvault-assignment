package com.example.backend.entity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="cart_items")
public class Item {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Long productId;
  private int count;
  private String name;
  private double price;
  private String imageUrl;
  
  @JsonBackReference
  @ManyToOne
  @JoinColumn(name="cart_id")
  private Cart cart;
  
}
