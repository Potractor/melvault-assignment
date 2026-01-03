package com.example.backend.mapper;

import com.example.backend.dto.ProductDto;
import com.example.backend.entity.Product;

public class ProductMapper {
  public static Product mapToProduct(ProductDto productDto) {
   Product product = new Product();
   product.setAvailable(productDto.getQuantity()>0);
   product.setCategory(productDto.getCategory());
   product.setName(productDto.getName());
   product.setOldPrice(productDto.getOldPrice());
   product.setNewPrice(productDto.getNewPrice());
   product.setQuantity(productDto.getQuantity());
   product.setId(productDto.getId());
    return product;
  }
  public static ProductDto mapToProductDto(Product product) {
    ProductDto productDto = new ProductDto();
    productDto.setAvailable(product.getQuantity()>0);
    productDto.setCategory(product.getCategory());
    productDto.setName(product.getName());
    productDto.setOldPrice(product.getOldPrice());
    productDto.setNewPrice(product.getNewPrice());
    productDto.setQuantity(product.getQuantity());
    productDto.setId(product.getId());
    productDto.setFiles(product.getFiles().stream().map(file->FileMapper.mapToFileDto(file)).toList());
     return productDto;
   }
}
