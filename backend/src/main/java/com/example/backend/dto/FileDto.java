package com.example.backend.dto;
import lombok.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FileDto {
  
  private Long id;
  private String name;
  private String fileUrl;
  private Long productId;
}
