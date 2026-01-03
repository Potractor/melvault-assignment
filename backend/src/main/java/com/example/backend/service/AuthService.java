package com.example.backend.service;

import com.example.backend.dto.JwtAuthResponse;
import com.example.backend.dto.LoginDto;
import com.example.backend.dto.RegisterDto;

public interface AuthService {
  JwtAuthResponse login (LoginDto loginDto);
  JwtAuthResponse register(RegisterDto registerDto, String role);
}
