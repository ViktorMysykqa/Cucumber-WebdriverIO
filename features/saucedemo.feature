Feature: Login Validation on saucedemo.com

  Scenario: User sees "Epic sadface: Username is required" error message on login without username
    Given User is located on the main page of saucedemo website
    When User clicks the Login button
    Then User should see the "Epic sadface: Username is required" error message