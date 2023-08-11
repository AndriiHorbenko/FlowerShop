package com.shop.flowershop.config;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class EnvironmentTest {

  @Test
  void testEnvironment() {
    Env environment = new Env();
    environment.setEnv("TEST_KEY", "test_value");
    Assertions.assertEquals(System.getProperty("TEST_KEY"), "test_value");
  }
}
