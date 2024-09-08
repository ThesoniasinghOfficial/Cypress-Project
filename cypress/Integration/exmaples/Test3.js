/// <reference types="Cypress" />

describe('My Third Test Suite', function () {

  it('My Third Test Case', function () {

    // Visit the specified URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // Checkbox selection and validation
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')

    // Check multiple checkboxes
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    // Static Dropdown selection and validation
    cy.get('select').select('option2').should('have.value', 'option2')

    // Dynamic Dropdown selection
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click()
      }
    })
    // Validate the selected value in the dynamic dropdown
    cy.get('#autocomplete').should('have.value', 'India')

    // Visibility toggle testing
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    // Radio button selection and validation
    cy.get('[value="radio2"]').check().should('be.checked')

  })

})
