// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  //Go to google
  await page.goto('https://www.google.com')

  //Assert that the google homepage has loaded
  await page.waitForURL('https://www.google.com')
  
  //Assert that the cookies modal is shown
  await expect(await page.locator('div[class="dbsFrd"]')).toBeVisible()

  //Click the accept cookies button
  await page.locator('div[class="QS5gu sy4vM"]', {hasText: 'Accept all'}).click()

  //Get the search input
  var searchInput = await page.locator('input[class="gLFyf gsfi"]')
  
  //Assert that the search box is empty
  await expect(await searchInput).toBeEmpty()

  //Search for Hippo digital
  await searchInput.type('Hippo Digital')

  //hit enter
  await page.keyboard.press('Enter')

  //Assert that the url is correct 
  await page.waitForSelector('div[id="result-stats"]')

  //Click the search result link
  await page.locator('a[href="https://hippodigital.co.uk/"]').click()

  //Wait for the hippo url to be shown
  await page.waitForURL('https://hippodigital.co.uk/')

});
