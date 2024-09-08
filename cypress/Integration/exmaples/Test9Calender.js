/// <reference types="Cypress" />
describe('Calendar test', () => {

  it('Verify date selection', () => {

    const monthNumber = "6";  // June
    const date = "15";  // 15th of June
    const year = "2027";
    const expectedList = [monthNumber, date, year];

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    cy.wait(5000);  // Wait for the page to load

    // Click on the date picker to open it
    cy.get(".react-date-picker__inputGroup").click();

    // Navigate through the calendar to select the desired year, month, and date
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.contains("button", year).click();
    cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber) - 1).click();
    cy.contains("abbr", date).click();

    // Assertion to verify the selected date is correct
    cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
      cy.wrap($el).invoke('val').should('eq', expectedList[index]);
    });

  });

});
