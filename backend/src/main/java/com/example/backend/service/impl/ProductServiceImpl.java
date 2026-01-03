package com.example.backend.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.backend.dto.FileDto;
import com.example.backend.dto.ProductDto;
import com.example.backend.entity.Category;
import com.example.backend.entity.File;
import com.example.backend.entity.Product;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.mapper.FileMapper;
import com.example.backend.mapper.ProductMapper;
import com.example.backend.repository.ProductRepository;
import com.example.backend.service.FileService;
import com.example.backend.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
  @Autowired
  private ProductRepository productRepository;
  @Autowired 
  private FileService fileService;
  @Override
  public ProductDto saveProduct(ProductDto productDto,MultipartFile imageFile) throws IOException {
    // TODO Auto-generated method stub
    Product product = ProductMapper.mapToProduct(productDto);
    Product savedProduct = productRepository.save(product);
    return saveProductImage(savedProduct.getId(),imageFile);
  }
  @Override
  public ProductDto saveProductImage(Long productId, MultipartFile imageFile) throws IOException {
    // TODO Auto-generated method stub
    Product product = productRepository.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product with id"+ productId+ "not found"));
    FileDto file = fileService.saveFile(imageFile,productId);
    List<File> files = product.getFiles();
    if(files == null)
      files = new ArrayList<File>();
    files.add(FileMapper.mapToFile(file,product));
    product.setFiles(files);
    Product savedProduct = productRepository.save(product);
    return ProductMapper.mapToProductDto(savedProduct);
  }
  @Override
  public List<ProductDto> getAllProducts() {
    // TODO Auto-generated method stub
    return productRepository.findAll().stream().map(product->ProductMapper.mapToProductDto(product)).toList();
  }
  @Override
  public List<ProductDto> getProductByCategory(Category category) {
    // TODO Auto-generated method stub
    return productRepository.findByCategory(category).stream().map(product->ProductMapper.mapToProductDto(product)).toList();
  }
  @Override
  public ProductDto getProductById(Long id) {
    // TODO Auto-generated method stub
    Product product = productRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Product with id"+ id+ "not found"));
    return ProductMapper.mapToProductDto(product);
  }
}
