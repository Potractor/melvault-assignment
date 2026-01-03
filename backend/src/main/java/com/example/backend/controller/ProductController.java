package com.example.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.example.backend.dto.ProductDto;
import com.example.backend.entity.Category;
import com.example.backend.service.ProductService;

@RestController
@RequestMapping("/api/product")
public class ProductController {
  
  @Autowired
  private ProductService productService;
  
  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<?> createProduct(@RequestPart("product") ProductDto productDto, @RequestPart("imageFile") MultipartFile imageFile) {
    try {
    ProductDto product = productService.saveProduct(productDto, imageFile);
    return new ResponseEntity<>(product, HttpStatus.CREATED);
    }
    catch(Exception error) { 
      return new ResponseEntity<>(error.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @GetMapping("all")
  public ResponseEntity<List<ProductDto>> getAllProducts(){
    return new ResponseEntity<>( productService.getAllProducts(),HttpStatus.OK);
  }
  
  @GetMapping()
  public ResponseEntity<List<ProductDto>>getProductByCategory(@RequestParam Category category) { 
    return new ResponseEntity<>(productService.getProductByCategory(category), HttpStatus.OK);
  }
  
  @GetMapping("{id}")
  public ResponseEntity<ProductDto> getProductById(@PathVariable Long id) { 
    return new ResponseEntity<>(productService.getProductById(id),HttpStatus.OK);
  }
}
