import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/registerPage";
import CheckoutPage from "../pages/checkoutPage";
import CartPage from "../pages/cartPage";
import { faker } from '@faker-js/faker';

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

let registerData = {
  firstName : faker.name.firstName().toString(),
  lastName : faker.name.lastName().toString(),
  email : faker.internet.email().toString(),
  phoneNumber : faker.phone.number().toString(),
  password : faker.internet.password().toString(),
}

describe("E2E Tests for OpenCart", () => {
  beforeEach(() => {
    cy.visit("https://opencart.abstracta.us/");
  });

  it("@TC_001 - User Registration", () => {
    registerPage.navigateToRegister();
    registerPage.fillRegistrationForm(registerData.firstName, registerData.lastName, registerData.email, registerData.phoneNumber, registerData.password);
    registerPage.submitForm();
    cy.url().should('eq', 'https://opencart.abstracta.us/index.php?route=account/account');
  });

  it("@TC_002 - Login Validation", () => {
    loginPage.navigateToLogin();
    loginPage.enterCredentials("michael@example.com", "Password123!");
    loginPage.submitLogin();
    cy.url().should('eq', 'https://opencart.abstracta.us/index.php?route=account/account');
  });

  it("@TC_003 - Password Reset", () => {
    loginPage.navigateToLogin();
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

  it.only("@TC_009 - Complete Checkout Process", () => {
    checkoutPage.completeCheckout(
      registerData.firstName, registerData.lastName, registerData.email, registerData.phoneNumber
    );
    cy.contains("Your order has been placed!").should("be.visible");
  });
});
