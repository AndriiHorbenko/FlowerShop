package com.shop.flowershop;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.TestPropertySource;

@TestPropertySource(locations = "classpath:test.env")
class FlowerShopApplicationTests {

  private Dotenv dotenv;

  @BeforeEach
  public void setUp() {
    dotenv = Dotenv.configure().load();
  }

  @Test
  void testEnvironmentVariablesLoaded() {
    Assertions.assertNotNull(dotenv);
  }
}