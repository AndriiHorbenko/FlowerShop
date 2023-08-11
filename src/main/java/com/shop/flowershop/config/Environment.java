package com.shop.flowershop.config;

import io.github.cdimascio.dotenv.Dotenv;

public class Environment {

  public Environment() {
    Dotenv dotenv = Dotenv.configure().load();
    dotenv.entries().forEach(entry -> setEnvironment(entry.getKey(), entry.getValue()));
  }

  public void setEnvironment(String key, String value) {
    System.setProperty(key, value);
  }
}
