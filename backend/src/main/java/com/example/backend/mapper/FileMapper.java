package com.example.backend.mapper;

import com.example.backend.dto.FileDto;
import com.example.backend.entity.File;
import com.example.backend.entity.Product;

public class FileMapper {
  public static FileDto mapToFileDto(File savedFile) {
    return new FileDto(savedFile.getId(), savedFile.getName(),savedFile.getFileUrl(),savedFile.getProductId().getId());
  }
  public static File mapToFile(FileDto fileDto, Product product ) { 
    return new File(fileDto.getId(),fileDto.getName(),fileDto.getFileUrl(),product);
  }
}
