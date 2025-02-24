export default class CartPage {
    constructor() {
        this.searchInput = "input[name='search']";
        this.cartUpdateButton = "button[data-original-title='Update']";
    }
    addProductToCart(productName) {
        cy.visit("https://opencart.abstracta.us/index.php?route=product/category&path=18");
        cy.contains(productName).click();
        cy.get("button[onclick*='cart.add']").click();
    }
    searchAndAddProduct(productName) {
        cy.get(this.searchInput).type(`${productName}{enter}`);
        cy.contains(productName).click();
        cy.get("button[onclick*='cart.add']").click();
    }
    removeProductFromCart(productName) {
        cy.contains("Shopping Cart").click();
        cy.contains(productName).parents("tr").find("button").click();
    }
    increaseProductQuantity(productName, quantity) {
        cy.contains("Shopping Cart").click();
        cy.contains(productName).parents("tr").find("input[name='quantity']").clear().type(quantity);
        cy.get(this.cartUpdateButton).click();
    }
}