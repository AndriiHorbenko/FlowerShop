package com.shop.flowershop;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.TestPropertySource;

@TestPropertySource(locations = "classpath:test.env")
class FlowerShopApplicationTest {

  private Dotenv dotenv;

  @BeforeEach
  public void setUp() {
    dotenv = Dotenv.configure().load();
  }

  @Test
  void main() {
    Assertions.assertNotNull(dotenv);
  }
}