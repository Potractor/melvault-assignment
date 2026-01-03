package com.example.backend.service.impl;

import com.example.backend.dto.JwtAuthResponse;
import com.example.backend.exception.*;
import com.example.backend.dto.LoginDto;
import com.example.backend.dto.RegisterDto;
import com.example.backend.dto.UserDetailsDto;
import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.exception.EmsApiException;
import com.example.backend.repository.RoleRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.JwtTokenProvider;
import com.example.backend.service.AuthService;
import java.util.HashSet;
import java.util.Set;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.*;
@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {
  private UserRepository userRepository;
  private RoleRepository roleRepository;
  private PasswordEncoder passwordEncoder;
  private JwtTokenProvider jwtTokenProvider;
  private AuthenticationManager authenticationManager;
  @Override
  public JwtAuthResponse register(RegisterDto registerDto,String role) {
    if(userRepository.existsByEmail(registerDto.getEmail()))
      throw new EmsApiException(HttpStatus.BAD_REQUEST, "Email already exists");
    if(userRepository.existsByUsername(registerDto.getUsername()))
      throw new EmsApiException(HttpStatus.BAD_REQUEST , "Username already exists");
    User user = new User();
     user.setEmail(registerDto.getEmail());
     user.setName(registerDto.getName());
     user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
     user.setUsername(registerDto.getUsername());
     Set<Role> roles = new HashSet<>();
     Role userRole;
     if(role == "admin")
     userRole = roleRepository.findByName("ROLE_ADMIN");
     else 
     userRole = roleRepository.findByName("ROLE_USER");     
     roles.add(userRole);
     user.setRoles(roles);
     userRepository.save(user);
     return login(new LoginDto(registerDto.getEmail(),registerDto.getPassword()));
    
  }
  
  
  @Override
  public JwtAuthResponse login(LoginDto loginDto) {
    // TODO Auto-generated method stub
    org.springframework.security.core.Authentication authentication =authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
        loginDto.getUsernameOrEmail(),
        loginDto.getPassword()
        ));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    String token = jwtTokenProvider.generateToken(authentication);
    User user = userRepository.findByUsernameOrEmail(loginDto.getUsernameOrEmail(),loginDto.getUsernameOrEmail()).orElseThrow(()-> new ResourceNotFoundException("not found"));
    return new JwtAuthResponse(token,"Bearer",new UserDetailsDto(user.getId(),user.getName(),user.getEmail()));
  }
  
}
