// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//login to the MP
Cypress.Commands.add('UserLogin', () => {
    const baseUrl = Cypress.env('baseUrl');
    const email = Cypress.env('User_email');
    const password = Cypress.env('User_password');

    cy.visit(baseUrl)
    cy.get('#loginform > :nth-child(1) > .form-control')  
    .click()
    .clear()
    .type(email);
    cy.get(':nth-child(2) > .form-control')
    .click()
    .clear()
    .type(password);
    cy.get('button.btn.btn-block.btn-lg.btn-info').click();
});

Cypress.Commands.add('PasswordChange', () => {
    const email = Cypress.env('User_email');
    const password = Cypress.env('User_password');

    cy.get(':nth-child(1) > .col-12 > .form-control').should('be.visible')
      .click()
      .type(email);
      cy.get(':nth-child(2) > .col-12 > .form-control').should('be.visible')
      .click()
      .type(password);
      cy.get('button.btn.btn-block.btn-lg.btn-info').should('have.text', 'CHANGE')
      .click();
})

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })