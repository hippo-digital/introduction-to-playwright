describe('Go to the Hippo website using Google', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    //Assert that the site has loaded
    cy.url().should('equal', "https://www.google.com/")
    //Assert that the accept cookies modal is shown
    cy.get('div[class="dbsFrd"]').should('be.visible').click()
    //Scroll to the accept button
    cy.get('div[class="QS5gu sy4vM"]').contains('Accept all').scrollIntoView().as('acceptButton')
    //Click the accept button
    cy.get('@acceptButton').click()

    //Assert that the search input is now shown
    cy.get('input[title="Search"]').should('be.visible').should('be.empty').as('searchInput')

    //Search for Hippo Digital
    cy.get('@searchInput').type('Hippo Digital')
    
    //Click on the first suggestion for Hippo Digital
    cy.get('ul[class="G43f7e"]').should('be.visible').within((el) => {
      //click on the first result that has 'hippo digital'
      cy.get('li').eq(0).should('contain', 'Hippo Digital').as('expectedResult')
      //Click on that result
      cy.get('@expectedResult').click()
    })

    //Assert that the search results are shown
    cy.get('div[class="BYM4Nd"]').contains('Hippo Digital').should('be.visible')
    cy.get('a[href="https://hippodigital.co.uk/"]').should('be.visible').as('hippoLink')

    //Click on the hippo digital search link
    cy.get('@hippoLink').click()

  })

  it('click on the hippo link', () => {
    //Assert that we are take to the Hippo home page
    cy.url().should('equal', "https://hippodigital.co.uk/")
    
  })
})