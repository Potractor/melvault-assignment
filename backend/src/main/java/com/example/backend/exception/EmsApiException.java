package com.example.backend.exception;

import org.springframework.http.HttpStatus;
import lombok.*;
@Getter
@AllArgsConstructor
public class EmsApiException extends RuntimeException{
  private HttpStatus status;
  private String message;
  
}
