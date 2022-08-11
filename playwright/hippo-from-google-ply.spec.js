// @ts-check
const { test, expect } = require('@playwright/test');

test('Live demo - writing a test that searches for Hippo on google and then goes to the site', async ({ page }) => {
  //Go to google
  await page.goto('https://www.google.com')

  //click the accept cookies button
  await page.locator('button[id="L2AGLb"]').click()

  //type into input
  await page.locator('input[title="Search"]').type('Hippo Digital')

  //
  await page.keyboard.press('Enter')

  //Aasert page results
  await expect(await page.locator('a[href="https://hippodigital.co.uk/"]')).toBeVisible()

  await page.locator('a[href="https://hippodigital.co.uk/"]').click()

  //Wait for the hippo url to be shown
  await page.waitForURL('https://hippodigital.co.uk/')

});
