const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');

let driver;

Given('User is located on the main page of saucedemo website', async function () {
  driver = new Builder().forBrowser('chrome').build();
  await driver.get('https://www.saucedemo.com/');
});
When('User clicks the Login button', async function () {
  const loginButton = await driver.findElement(By.id('login-button'));
  await loginButton.click();
});

Then('User should see the "Epic sadface: Username is required" error message', async function () {
  const errorElement = await driver.findElement(By.id('login_button_container'));
  const actualErrorMessage = await errorElement.getText();

  const expectedErrorMessage = "Epic sadface: Username is required"

  await actualErrorMessage
  
  assert.strictEqual(actualErrorMessage, expectedErrorMessage);
  await driver.quit();
});

