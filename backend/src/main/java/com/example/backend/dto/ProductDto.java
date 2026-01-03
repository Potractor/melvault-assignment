package com.example.backend.dto;
import java.util.ArrayList;
import java.util.List;
import com.example.backend.entity.Category;
import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
  private Long id;
  private String name;
  private Category category;
  private double oldPrice;
  private double newPrice;
  private int quantity;
  private Boolean available;
  private List<FileDto> files;
}
