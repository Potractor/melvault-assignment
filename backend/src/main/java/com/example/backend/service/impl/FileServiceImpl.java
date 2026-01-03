package com.example.backend.service.impl;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.backend.dto.FileDto;
import com.example.backend.entity.File;
import com.example.backend.entity.Product;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.mapper.FileMapper;
import com.example.backend.repository.FileRepository;
import com.example.backend.repository.ProductRepository;
import com.example.backend.service.FileService;
import software.amazon.awssdk.*;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

@Service
public class FileServiceImpl implements FileService {
  
  @Autowired
  private FileRepository fileRepository;
  
  @Autowired
  private ProductRepository productRepository;
  @Autowired
  private S3Client s3Client;
  

  @Value("${aws.s3.bucket-name}")
  private String bucketName;
  @Override
  public FileDto saveFile(MultipartFile file, Long productId) {
    // TODO Auto-generated method stub
    String url = saveFileToAWSS3Bucket(file);
    File savingFile = new File();
    savingFile.setFileUrl(url);
    savingFile.setName(file.getOriginalFilename());
    Product product = productRepository.findById(productId).orElseThrow(()-> new ResourceNotFoundException("product with"+ productId+ "not found"));
    savingFile.setProductId(product);
    File savedFile =  fileRepository.save(savingFile);
    return FileMapper.mapToFileDto(savedFile);
  }

  @Override
  public List<File> getAllFiles(Long productId) {
    // TODO Auto-generated method stub
    return null;
  }
  
  private String saveFileToAWSS3Bucket(MultipartFile file) {
    String fileName = UUID.randomUUID()+"-"+ file.getOriginalFilename();
    try { 
      PutObjectRequest request = PutObjectRequest.builder()
          .bucket(bucketName).key(fileName).contentType(file.getContentType()).build();
      s3Client.putObject(request, RequestBody.fromBytes(file.getBytes()));
      return getFileUrl(fileName);
      }
    catch(Exception error) {
      throw new RuntimeException(error.getMessage());
    }
  }
  private String getFileUrl(String fileName) { 
    return "https://" + bucketName+ ".s3.amazonaws.com/"+ fileName;
  }
}
