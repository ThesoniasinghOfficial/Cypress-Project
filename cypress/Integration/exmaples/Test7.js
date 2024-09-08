/// <reference types="Cypress" />

describe('Handling Child Windows', () => {

  it('Should handle child window by removing target attribute', () => {

    // Visit the main page
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Remove the 'target' attribute to open the link in the same tab
    cy.get("#opentab").invoke('removeAttr', 'target').click();

    // Switch context to the new domain
    cy.origin("https://www.qaclickacademy.com", () => {
      // Click on the 'About' link in the navbar
      cy.get("#navbarSupportedContent a[href*='about']").click();
      // Assert that the heading on the page contains 'QAClick Academy'
      cy.get(".mt-50 h2").should('contain', 'QAClick Academy');
    });
  });

  it('Should handle child window using direct navigation', () => {

    // Visit the main page again
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Capture the href of the #opentab link and visit it directly
    cy.get('#opentab').then((el) => {
      const url = el.prop('href'); // Extract the URL from the 'href' property
      cy.visit(url); // Visit the URL directly

      // Switch context to the new domain
      cy.origin(url, () => {
        // Click on the 'About' link in the sub-menu bar
        cy.get("div.sub-menu-bar a[href*='about']").click();

        // Assert that the heading on the page contains 'QAClick Academy'
        cy.get(".mt-50 h2").should('contain', 'QAClick Academy');
      });
    });
  });

});
