// Import required packages
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Selenium WebDriver
const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions()
  .build();

// Define your automation logic
async function successfullyRedirectedToLoginPage() {
    // Navigate to a website
    await driver.get('https://www.moduit.id');

    //Verify button Login
    const landingPage = await driver.findElement(By.className('style_btnlineblue__INs7y style_btnsmall__M7p_Y style_lg__i0Pqn'));
    await landingPage.sendKeys('Masuk / Daftar', Key.RETURN);

    // Wait for the search results to load
    await driver.wait(until.titleContains('Masuk / Daftar'), 5000);

    // Switch tab
    await driver.switchTo().newWindow(WindowType.WINDOW);

    // Verify Login Page
    const verifyLoginPage = await driver.findElement(By.className('_11jxnc6'));
    await verifyLoginPage.sendKeys('Selamat Datang!', Key.RETURN);

    // Click placeholder username
    const userName = await driver.findElement(By.id('userEmail').click());

    // Input username
    await userName.sendKeys('viannoctav@gmail.com').WindowType();

    // Click button Selanjutnya
    const nextButton = await driver.findElement(By.className('_euwm2vb'));
    await verifyLoginPage.sendKeys('Selanjutnya', Key.RETURN).click();

    // Quit the WebDriver
    await driver.quit();
}

// Run the automation script
successfullyRedirectedToLoginPage();
