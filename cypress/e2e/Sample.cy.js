/// <reference types="Cypress" />

describe('Launch Adaptive site', () => {
  beforeEach(()=>{
    cy.fixture('example.json').then((data)=>{
      cy.visit(data.baseurl)
      cy.get('#accept_cookies').click()
    })
  })
  


  it('open url and verify the title', () => {
    //cy.visit('https://weareadaptive.com/')
    //cy.get('#accept_cookies').click()
    cy.title().should('eq','Adaptive Financial Consulting | Accelerating your trading solution')
    cy.screenshot()
    
  })

  it('About Us',()=>{
    //cy.visit('https://weareadaptive.com/')
    //cy.get('#accept_cookies').click()
    cy.get('.menu-item-123>a').click()
    cy.url().should('include','about')
    cy.screenshot()

  })

  it('Solution',()=>{
    //cy.visit('https://weareadaptive.com/')
    //cy.get('#accept_cookies').click()
    cy.get('.menu-item-8229').click()
    cy.title().should('eq','Your Solutions - Adaptive Financial Consulting')
    cy.screenshot()


  })

  it('Client Stories',()=>{
    //cy.visit('https://weareadaptive.com/')
    //cy.get('#accept_cookies').click()
    cy.contains('Client Stories').trigger('mouseover')
    cy.contains('Re-engineering a Bond Trading Platform').trigger('mouseover').click()
    cy.url().should('include','re-engineering-a-bond-trading-platform')
    cy.screenshot()


  })


})