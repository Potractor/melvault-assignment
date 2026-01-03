package com.example.backend.service;

import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import com.example.backend.dto.ProductDto;
import com.example.backend.entity.Category;

public interface ProductService {
  public ProductDto saveProduct(ProductDto productDto,MultipartFile imageFile) throws IOException;
  public ProductDto saveProductImage(Long productId , MultipartFile imageFile) throws IOException;
  public List<ProductDto> getAllProducts();
  public List<ProductDto> getProductByCategory(Category category);
  public ProductDto getProductById(Long id);
}
