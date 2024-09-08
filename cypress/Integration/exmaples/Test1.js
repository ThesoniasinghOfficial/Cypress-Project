/// <reference types="Cypress" />

describe('My First Test Suite', function () {
  it('My First Test Case', function () {

    // Visit the website
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    // Type 'ca' into the search box to filter products
    cy.get('.search-keyword').type('ca')

    // Wait for 2 seconds to allow the search results to load
    cy.wait(2000)

    // Verify that there are 5 products in the DOM, regardless of visibility
    cy.get('.product').should('have.length', 5)

    // Verify that only 4 products are visible after filtering
    cy.get('.product:visible').should('have.length', 4)

    // Alias the products container for easier reference
    cy.get('.products').as('productLocator')

    // Verify there are 4 products inside the products container
    cy.get('@productLocator').find('.product').should('have.length', 4)

    // Click the "Add to Cart" button of the third visible product
    cy.get(':nth-child(3) > .product-action > button').click()

    // Alternatively, click "Add to Cart" for the product at index 2 (3rd product) within the container
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {
      console.log('sf') // Log a message to the console
    })

    // Iterate through each product and add 'Cashews' to the cart
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text()
      if (textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click()
      }
    })

    // Assert that the logo text is 'GREENKART'
    cy.get('.brand').should('have.text', 'GREENKART')

    // Log the logo text in the Cypress test runner
    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text())
    })
  })
})
