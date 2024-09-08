/// <reference types="Cypress" />

describe('My Fourth Test Suite', function () {

  it('My Fourth Test Case', function () {

    // Visit the specified URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

    // Handling the alert pop-up
    cy.on('window:alert', (str) => {
      // Mocha assertion for alert text
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    // Handling the confirm pop-up
    cy.on('window:confirm', (str) => {
      // Mocha assertion for confirm text
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

  })

})
