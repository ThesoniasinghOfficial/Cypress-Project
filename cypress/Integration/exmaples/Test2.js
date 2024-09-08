/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

  it('My Second Test Case', function () {

    // Visit the specified URL
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    // Type 'ca' into the search box to filter products
    cy.get('.search-keyword').type('ca')

    // Wait for 2 seconds to allow the search results to load
    cy.wait(2000)

    // Use alias for the products container for easier reference
    cy.get('.products').as('productLocator')

    // Iterate over each product within the container
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

      // Get the text of the product name
      const textVeg = $el.find('h4.product-name').text()

      // If the product name includes 'Cashews', click the 'Add to Cart' button
      if (textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click()
      }
    })

    // Click on the cart icon to view the cart
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

    // fixture (placeholder for future code, if needed)

  })

})
