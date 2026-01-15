package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.dto.RazorpayRequest;
import com.example.backend.service.RazorPayService;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
  
  @Autowired
  private RazorPayService razorpayService;
  
  @PostMapping("/create-order")
  public ResponseEntity<String> createOrder() {
    try { 
      return ResponseEntity.ok(razorpayService.createOrder(1000,"INR","recepient101"));
    }
    catch(Exception e) {
      return ResponseEntity.ok(e.getMessage());
    }
  }
}
