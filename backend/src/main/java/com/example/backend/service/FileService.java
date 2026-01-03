package com.example.backend.service;

import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import com.example.backend.dto.FileDto;
import com.example.backend.entity.File;

public interface FileService {
  public FileDto saveFile(MultipartFile file, Long productId);
  
  public List<File> getAllFiles(Long productId);
}
