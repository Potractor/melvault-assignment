package com.example.backend.dto;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsDto {
  private Long id;
  private String name;
  private String email;
}
