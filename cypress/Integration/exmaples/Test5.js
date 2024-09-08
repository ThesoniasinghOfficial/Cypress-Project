/// <reference types="Cypress" />

describe('My Fifth Test Suite', function () {

  it('My Fifth Test Case', function () {

    // Visit the specified URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // Iterate through each cell in the second column of the table
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

      // Get the text of the current cell
      const text = $e1.text()

      // Check if the text includes "Python"
      if (text.includes("Python")) {

        // If "Python" is found, get the price in the next column
        cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {

          // Get the text of the price cell
          const priceText = price.text()

          // Assert that the price is equal to '25'
          expect(priceText).to.equal('25')
        })
      }
    })
  })
})
