/// <reference types="Cypress" />
import HomePage from "../pageObject/HomePage";
import ProductPage from "../pageObject/ProductPage";

describe('Calendar test', () => {

  before(function () {
    // Load fixture data from the 'example.json' file
    cy.fixture('example').then((data) => {
      this.data = data;
    });
  });

  it('Verify date selection and product selection', function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    cy.visit('https://rahulshettyacademy.com/angularpractice/');

    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneur().should('be.disabled');
    Cypress.config('defaultCommandTimeout', 8000);
    homePage.getShopTab().click();

    // Select products based on the data from fixture
    this.data.productName.forEach(product => {
      cy.get('h4.card-title').each(($el, index) => {
        if ($el.text().includes(product)) {
          cy.get('button.btn.btn-info').eq(index).click();
        }
      });
    });

    // Use the page object method to click on the checkout button
    productPage.getCheckOutButton().click();
    let sum = 0;

    // Calculate the total price of selected products
    cy.get('tr td:nth-child(4) strong').each(($e1) => {
      const amount = $e1.text();
      const price = amount.split(" ")[1].trim();
      sum = sum + Number(price);
      cy.log(`Price: ${price}`);
    }).then(() => {
      cy.log(`Total Price: ${sum}`);
    });

    cy.get('h3 strong').then(function (element) {
      const amount = element.text();
      const res = amount.split(" ");
      const total = res[1].trim();
      expect(Number(total)).to.equal(sum);
    });


    // Proceed to checkout
    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').click({ force: true });
    cy.get('.ng-untouched > .btn').click();

    // Validate the success message
    cy.get('.alert').then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  });
});
