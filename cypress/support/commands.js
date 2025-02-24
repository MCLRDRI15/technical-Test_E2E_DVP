import { faker } from '@faker-js/faker';

Cypress.Commands.add('generateFakeData', () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    password: faker.internet.password(),
  };
});