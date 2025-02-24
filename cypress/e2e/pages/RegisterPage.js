export default class RegisterPage {
    constructor() {
        this.firstNameInput = "#input-firstname";
        this.lastNameInput = "#input-lastname";
        this.emailInput = "#input-email";
        this.telephone = "input[name='telephone']";
        this.passwordInput = "#input-password";
        this.confirmPasswordInput = "#input-confirm";
        this.agreeCheckbox = "input[name='agree']";
        this.continueButton = "input[value='Continue']";
    }
    navigateToRegister() {
        cy.visit("https://opencart.abstracta.us/index.php?route=account/register");
    }
    fillRegistrationForm(firstName, lastName, email, telephone, password) {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.emailInput).type(email);
        cy.get(this.telephone).type(telephone);
        cy.get(this.passwordInput).type(password);
        cy.get(this.confirmPasswordInput).type(password);
        cy.get(this.agreeCheckbox).check();
    }
    submitForm() {
        cy.get(this.continueButton).click();
    }
}