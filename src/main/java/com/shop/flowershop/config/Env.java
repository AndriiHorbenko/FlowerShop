package com.shop.flowershop.config;

import io.github.cdimascio.dotenv.Dotenv;

public class Env {
  public Env() {
    try {
      Dotenv dotenv = Dotenv.configure().load();
      dotenv.entries().forEach(entry -> setEnv(entry.getKey(), entry.getValue()));
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public void setEnv(String key, String value) {
    System.setProperty(key, value);
  }
}
