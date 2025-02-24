export default class LoginPage {
    constructor() {
        this.emailInput = "#input-email";
        this.passwordInput = "#input-password";
        this.loginButton = "input[value='Login']";
        this.forgotPasswordLink = "a[href*='https://opencart.abstracta.us:443/index.php?route=account/forgotten']";
    }
    navigateToLogin() {
        cy.visit("https://opencart.abstracta.us/index.php?route=account/login");
    }
    enterCredentials(email, password) {
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
    }
    submitLogin() {
        cy.get(this.loginButton).click();
    }
    navigateToForgotPassword() {
        cy.get(this.forgotPasswordLink).first().click();
    }
    requestPasswordReset(email) {
        cy.get(this.emailInput).type(email);
        cy.get("input[value='Continue']").click();
    }
}