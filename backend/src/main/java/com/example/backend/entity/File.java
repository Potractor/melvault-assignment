package com.example.backend.entity;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
@Entity
@Table(name="files")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class File {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String fileUrl;
  
  @JsonBackReference
  @ManyToOne
  @JoinColumn(name="product_id")
  private Product productId;
}