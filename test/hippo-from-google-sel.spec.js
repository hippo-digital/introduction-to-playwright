const fs = require('fs');
describe('go to hippo website from chromedriver', () => {
    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver;
 
    beforeEach(() => {
        driver = new Builder()
            .forBrowser('chrome')
            .build();
    });

    afterEach(() => {
        driver.quit();
    });
 
    it('should open google search and view search results', async () => {
        //Go to google
        await driver.get('http://www.google.com');
        //Assert that the cookies modal is shown
        var cookiesModal = await driver.findElement(By.css('div[class="dbsFrd"]'))
        //Get the cookies accept button
        var cookiesAcceptButton = await driver.findElement(By.css('div[class="QS5gu sy4vM"]'))
        //Click the cookies accept button
        await cookiesAcceptButton.click()
        //Get the search input
        var element = await driver.findElement(By.css('input[title=Search]'));
        //Type in 'Hippo Digital'
        await element.sendKeys("Hippo Digital", Key.RETURN);
        //Wait until the search result title contains 'hippo digital'
        await driver.wait(until.titleContains("Hippo Digital"), 4000);
        //Assert that the title is Hippo Digital
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('Hippo Digital - Google Search');
            });
        //Get the Hippo results Link
        var hippoDigitalLink = await driver.findElement(By.css('a[href="https://hippodigital.co.uk/"]'))
        //Click on the Hippo results link
        await hippoDigitalLink.click()
        //Wait until the URL contains hippodigital.co.uk
        await driver.wait(until.urlContains("hippodigital.co.uk"), 4000);
    });
})
