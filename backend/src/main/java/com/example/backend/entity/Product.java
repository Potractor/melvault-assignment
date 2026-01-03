package com.example.backend.entity;
import lombok.*;
import java.util.List;
import jakarta.persistence.*;
@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private Long id;
  private Category category;
  private String name;
  private double newPrice;
  private double oldPrice;
  private int quantity;
  private Boolean available;
   
  // each product can have multiple files 
  @OneToMany(mappedBy="productId" , cascade= CascadeType.ALL)
  private List<File> files;
  
  
  
  public Boolean getAvailable() {
    return this.quantity>0;
  }
}
