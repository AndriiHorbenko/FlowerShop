package com.shop.flowershop;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.TestPropertySource;

@TestPropertySource(locations = "classpath:test.env") // Указываем путь к файлу test.env
public class FlowerShopApplicationTests {

  @Test
  public void contextLoads() {

    Dotenv dotenv = Dotenv.configure().load();
    String test_key = dotenv.get("TEST_KEY");
    Assertions.assertEquals("test_value", test_key);
  }
}
