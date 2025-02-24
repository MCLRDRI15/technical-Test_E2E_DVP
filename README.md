Cypress End-to-End Testing Project
This is an end-to-end (E2E) testing project using **Cypress**. The goal of this project is to perform automated tests on the OpenCart website to validate the functionalities of user registration, login, shopping cart actions, checkout process, and more.
Prerequisites
To run this project, you need to have **Node.js** and **npm** installed. You can download them from [Node.js official website](https://nodejs.org/).
Getting Started
### 1. Clone the repository:
Clone this repository to your local machine using the following command:
```bash
git clone [https://github.com/MCLRDRI15/cypress-e2e-testing.git](https://github.com/MCLRDRI15/technical-Test_E2E_DVP.git)
```
### 2. Install dependencies:
Navigate to the project directory and install the required dependencies using npm:
```bash
cd cypress-e2e-testing
npm install
```
### 3. Run the tests:
Once the dependencies are installed, you can run the tests using Cypress. To open the Cypress test runner, use:
```bash
npx cypress open
```
This will open the Cypress UI, allowing you to run the tests interactively.
Alternatively, you can run the tests headlessly with:
```bash
npx cypress run
```
### 4. Test Specific Cases:
You can run a specific test by using the `--spec` flag with the path to the test file:
```bash
npx cypress run --spec cypress/e2e/"testName".js
```
Directory Structure
The project has the following structure:
```
├── cypress/
│   ├── e2e/                   # Test files
│        ├── pages/
│        ├── tests/
│   ├── fixtures/              # Sample data for tests
│   ├── support/               # Custom commands and test setup
├── node_modules/              # Node.js modules
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```
Test Cases Included
The following test cases are included in this project:
1. **User Registration (`@TC_001`)**: Registers a new user using dynamic data.
2. **Login Validation (`@TC_002`)**: Validates login functionality.
3. **Password Reset (`@TC_003`)**: Tests the password reset flow.
4. **View Laptops & Notebooks (`@TC_004`)**: Verifies navigation to the laptop and notebook section.
5. **Add MacBook Pro to Cart (`@TC_005`)**: Adds MacBook Pro to the shopping cart.
6. **Search and Add Samsung Galaxy Tablet (`@TC_006`)**: Searches and adds a Samsung Galaxy Tablet to the cart.
7. **Remove MacBook Pro from Cart (`@TC_007`)**: Removes MacBook Pro from the shopping cart.
8. **Increase Quantity of Samsung Galaxy Tablet (`@TC_008`)**: Increases the quantity of the Samsung Galaxy tablet in the cart.
9. **Complete Checkout Process (`@TC_009`)**: Completes the checkout process for an order.
Custom Commands
The project uses custom commands for repeated actions such as:
- **Login**: `loginPage.enterCredentials()`
- **Add Product to Cart**: `cartPage.addProductToCart()`
- **Complete Checkout**: `checkoutPage.completeCheckout()`
Faker Data Generation
To generate dynamic test data (e.g., for registration forms), we use the `faker` library. Example usage in tests:
```js
let registerData = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  password: faker.internet.password(),
};
```
