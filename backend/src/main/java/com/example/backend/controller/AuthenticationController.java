package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.dto.JwtAuthResponse;
import com.example.backend.dto.LoginDto;
import com.example.backend.dto.RegisterDto;
import com.example.backend.service.AuthService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
  
  @Autowired
  private AuthService authService;
  
  @PostMapping("/login")
  public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDto loginDto) {
    return ResponseEntity.ok(authService.login(loginDto));
    }
  
  @PostMapping("/register")
  public ResponseEntity<JwtAuthResponse> register(@RequestBody RegisterDto registerDto) {
    return ResponseEntity.ok(authService.register(registerDto,"user"));
    }
  
}
