import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/registerPage";
import CheckoutPage from "../pages/checkoutPage";
import CartPage from "../pages/cartPage";

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe("E2E Tests for OpenCart", () => {
  beforeEach(() => {
    cy.visit("https://opencart.abstracta.us/");
  });

  it("@TC_001 - User Registration", () => {
    registerPage.navigateToRegister();
    registerPage.fillRegistrationForm(
      "Michael Alejandro",
      "Rios Rodriguez",
      "michael@example.com",
      "3137906289",
      "Password123!"
    );
    registerPage.submitForm();
    cy.url().should('eq', 'https://opencart.abstracta.us/index.php?route=account/success');
    cy.contains('p', 'Congratulations! Your new account has been successfully created!').should('be.visible');
  });

  it("@TC_002 - Login Validation", () => {
    loginPage.navigateToLogin();
    loginPage.enterCredentials("testuser@example.com", "Password123!");
    loginPage.submitLogin();
    cy.contains("My Account").should("be.visible");
  });

  it("@TC_003 - Password Reset", () => {
    loginPage.navigateToForgotPassword();
    loginPage.requestPasswordReset("testuser@example.com");
    cy.contains("An email with a confirmation link has been sent").should(
      "be.visible"
    );
  });

  it("@TC_004 - View All Laptops & Notebooks", () => {
    cy.get(".nav > :nth-child(2) > .dropdown-toggle").trigger("mouseover");
    cy.contains("Show All Laptops & Notebooks").click();
    cy.url().should("include", "category&path=18");
    cy.get(".product-thumb").should("have.length.greaterThan", 0);
  });

  it("@TC_005 - Add MacBook Pro to Cart", () => {
    cartPage.addProductToCart("MacBook Pro");
    cy.contains("Success: You have added MacBook Pro").should("be.visible");
  });

  it("@TC_006 - Search and Add Samsung Galaxy Tablet to Cart", () => {
    cartPage.searchAndAddProduct("Samsung Galaxy");
    cy.contains("Success: You have added").should("be.visible");
  });

  it("@TC_007 - Remove MacBook Pro from Cart", () => {
    cartPage.addProductToCart("MacBook Pro");
    cartPage.removeProductFromCart("MacBook Pro");
    cy.contains("Your shopping cart is empty!").should("be.visible");
  });

  it("@TC_008 - Increase Samsung Galaxy Tablet Quantity", () => {
    cartPage.searchAndAddProduct("Samsung Galaxy");
    cartPage.increaseProductQuantity("Samsung Galaxy", 2);
    cy.get("input[name='quantity']").should("have.value", "2");
  });

  it("@TC_009 - Complete Checkout Process", () => {
    checkoutPage.completeCheckout(
      "John Doe",
      "123 Test Street",
      "testuser@example.com",
      "Visa"
    );
    cy.contains("Your order has been placed!").should("be.visible");
  });
});
