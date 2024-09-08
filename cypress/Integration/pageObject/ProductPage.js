class ProductPage {
    // Method to get the checkout button element
    getCheckOutButton() {
      return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
  }
  
  export default ProductPage;
  
  