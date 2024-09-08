/// <reference types="Cypress" />

describe('My Sixth Test Suite', function () {

  it('My Sixth Test Case', function () {

    // Visit the specified URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // Force the display of the mouse hover content and click the 'Top' option
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({ force: true })

    // Verify that the URL includes 'top' after clicking the 'Top' option
    cy.url().should('include', 'top')

  })
})
