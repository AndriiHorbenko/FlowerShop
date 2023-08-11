package com.shop.flowershop;

import com.shop.flowershop.config.Env;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FlowerShopApplication {

  public static void main(String[] args) {
    Env environment = new Env();
    SpringApplication.run(FlowerShopApplication.class, args);
  }
}