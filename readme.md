# Introduction to Playwright
Thanks to everyone who attended the Introduction to Playwright session. This codebase contains all of the tests that were demoed during this session.

There is a lot more you can do with Playwright that was not covered in this session. These tests are intended to demonstrate how simple it is to get started with this great e2e testing framework.

## Getting started 
### Initiation
1. Clone this repo to your machine.
2. Run `yarn` at project root in terminal

At this point you're ready to run Playwright and Cypress!

### Installing WebDrivers for Selenium
Selenium relies upon you having a version of the WebDriver installed which matches the browser and version that you want to run the tests in. We've currently got the Selenium tests setup to run in Chrome. So you'll need ChromeDriver. 

To install ChromeDriver:
1. Install the version which matches your version of Chrome from the [ChromeDriver downloads site](https://chromedriver.chromium.org/downloads)
2. Unzip the downloaded file
3. Check that you have the correct global path defined by running `sudo nano /etc/paths` at system root in terminal
4. Move the downloaded chromedriver.exe file to that location by running `mv chromedriver /usr/local/bin` from your downloads folder
5. Run `chromedriver` from system root to check that it has worked (if it has, you should get a 'chromedriver has started' output in your terminal.

## File structure

### Playwright Tests
- `./playwright` contains the Playwright tests
- `playwright.config.js` contains the configuration for the Playwright tests only

The following folders are generated with each test run:

- `./playwright-report` contains the files for the html reports - you don't need to touch these!
- `./test-results` contains the traces for each test run

### Cypress tests
- `./Cypress/e2e` contains the Cypress tests
- `cypress.config.js` contains the configuration for the Cypress tests only

### Selenium tests
- `./tests` contain all of the Selenium tests

## Running the tests

### Playwright
To run the Playwright tests in headed move (so you can see them running, run `npx playwright test --headed` from project root

To run them in debug mode, run `npx playwright test --headed --debug` from project root

### Cypress
To open the Cypress test runner, run `npx cypress open` from project root

### Selenium
To run the Selenium tests run `npm test` from project root
