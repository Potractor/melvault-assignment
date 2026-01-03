package com.example.backend.exception;

import java.time.LocalDateTime;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GolbalExceptionHandler {
  
  @ExceptionHandler(EmsApiException.class)
  public ResponseEntity<ErrorDetails> handleTodoAPIEXception(EmsApiException exception , WebRequest webRequest)
  {
  ErrorDetails errorDetails = new ErrorDetails(
      LocalDateTime.now(),
      exception.getMessage(),
     exception.getStatus().toString()
      );
  return new ResponseEntity<>(errorDetails , HttpStatus.BAD_REQUEST);
}
}
