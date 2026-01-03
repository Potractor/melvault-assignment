package com.example.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
public class S3Config {
  
  @Value("${aws.s3.access.key}")
  private String awsS3accessKey;
  @Value("${aws.s3.secret.key}")
  private String awsS3secretKey;
  @Value("${aws.s3.region}")
  private String awsS3region;
  
  
  @Bean
  public S3Client s3Client() {
    return S3Client.builder().region(Region.of(awsS3region)). credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(awsS3accessKey, awsS3secretKey))).build();
  }
}
