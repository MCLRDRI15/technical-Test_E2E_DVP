export default class CheckoutPage {
    constructor() {
        this.checkoutButton = "a[href*='https://opencart.abstracta.us:443/index.php?route=checkout/checkout']";
        this.firstNameInput = "#input-payment-firstname";
        this.lastNameInput = "#input-payment-lastname";
        this.addressInput = "#input-payment-address-1";
        this.emailInput = "#input-payment-email";
        this.paymentMethod = "input[name='payment_method'][value='cod']";
        this.confirmOrderButton = "#button-confirm";
    }
    completeCheckout(firstName, lastName, email, address) {
        cy.get(this.checkoutButton).click();
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.addressInput).type(address);
        cy.get(this.emailInput).type(email);
        cy.get(this.paymentMethod).check();
        cy.get(this.confirmOrderButton).click();
    }
}