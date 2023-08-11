package com.shop.flowershop;

import com.shop.flowershop.config.Environment;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FlowerShopApplication {
  public static void main(String[] args) {
    Environment environment = new Environment();
    SpringApplication.run(FlowerShopApplication.class, args);
  }
}