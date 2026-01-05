package com.example.backend.entity;
import lombok.*;
import jakarta.persistence.*;
@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String paymentType;
  private String paymentStatus;
  private String paymentMethod;
}
