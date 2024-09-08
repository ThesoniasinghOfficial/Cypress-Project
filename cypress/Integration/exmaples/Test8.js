/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', function(){
  it('Demo example', function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    // Load the iframe
    cy.frameLoaded("#courses-iframe");
    
    // Find and click the 'mentorship' link within the iframe
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    
    // Wait for a moment to allow DOM updates (optional)
    cy.wait(1000);

    // Re-fetch the element after the click
    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);
  });
});
