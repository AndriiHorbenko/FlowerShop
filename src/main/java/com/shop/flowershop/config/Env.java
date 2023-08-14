package com.shop.flowershop.config;

import io.github.cdimascio.dotenv.Dotenv;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class Env {
  public Env() {
    try {
      Dotenv dotenv = Dotenv.configure().load();
      dotenv.entries().forEach(entry -> setEnv(entry.getKey(), entry.getValue()));
    } catch (Exception e) {
      log.info("DOTENV Error");
    }
  }

  public void setEnv(String key, String value) {
    System.setProperty(key, value);
  }
}
