package com.example.backend.config;

import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import com.example.backend.security.JwtAuthenticationEntryPoint;
import com.example.backend.security.JwtAuthenticationFilter;
import lombok.*;
@Configuration
@EnableMethodSecurity
@AllArgsConstructor
public class SpringSecurityConfig {
  private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
  private JwtAuthenticationFilter jwtFilter;
  @Bean
  PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.cors(cors -> cors.configurationSource(corsConfigurationSource()));
    http.csrf(Customizer->Customizer.disable()).authorizeHttpRequests(authorize -> {
      authorize.requestMatchers(HttpMethod.POST , "/api/auth/**").permitAll()
    .anyRequest().authenticated();})
        .httpBasic(Customizer.withDefaults()
    );
    http.exceptionHandling(exception -> exception.authenticationEntryPoint(jwtAuthenticationEntryPoint));
    http.addFilterBefore(jwtFilter,UsernamePasswordAuthenticationFilter.class);
    return http.build();
  }
  @Bean
   public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
     return configuration.getAuthenticationManager();
   }
  
  @Bean
  CorsConfigurationSource corsConfigurationSource() {
      CorsConfiguration configuration = new CorsConfiguration();
      configuration.setAllowedOrigins(List.of("http://localhost:3000","http://localhost:3001"));
      configuration.setAllowedMethods(List.of("GET","POST","PUT","DELETE","PATCH"));
      configuration.setAllowedHeaders(List.of("*"));
      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      source.registerCorsConfiguration("/**",configuration);

      return source;
  }

}
