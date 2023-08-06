package com.shop.flowershop;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class FlowerShopApplicationTest {

  @Test
  void main_SuccessfullyStartsApplication() {

    Dotenv dotenv = Dotenv.configure().load();

    String data = dotenv.get("SPRING_MAIL_HOST");

    Assertions.assertEquals("smtp.gmail.com", data);
  }
}
