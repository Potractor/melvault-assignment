package com.example.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthResponse {
  private String accessToken;
  private String tokenType = "Bearer";
  private UserDetailsDto userdetails;
}
