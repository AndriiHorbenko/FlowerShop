package com.shop.flowershop.config;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class EnvironmentTest {

  @Test
  public void testEnvironment() {
    Environment environment = new Environment();
    environment.setEnvironment("SOME_KEY", "some_value");
    Assertions.assertEquals(System.getProperty("SOME_KEY"), "some_value");
  }
}
