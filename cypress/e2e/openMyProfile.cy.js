const user = require('../fixtures/userLogin.js');

describe('Test No Logo Portal', () => {
  const baseUrl = Cypress.env('baseUrl')
  before(() => {
    // action that happens only once
    cy.visit(baseUrl);
    
    cy.wrap(user).then((user) => {
    cy.get('button.btn.btn-block.btn-lg.btn-info').should('have.text', 'Log In');
      cy.get('#loginform > :nth-child(1) > .form-control')
      .click()
      .clear()
      .type(user.email);
      cy.get(':nth-child(2) > .form-control')
      .click()
      .clear()
      .type(user.password);
      cy.get('button.btn.btn-block.btn-lg.btn-info').click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .col-12 > .form-control').should('be.visible')
      .click()
      .type(user.email);
      cy.get(':nth-child(2) > .col-12 > .form-control').should('be.visible')
      .click()
      .type(user.password);
      cy.get('button.btn.btn-block.btn-lg.btn-info').should('have.text', 'CHANGE')
      .click();
      cy.url().should('include', `${baseUrl}/starter`);
  
      // cy.get('.swal2-confirm').click();
      // cy.get('.nav-link > .fa').click();
    });
  })

// it.skip('Portal overview', () => {
//   cy.get()
// })

  it('Portal notification board view', () => {
    cy.get('#navbarSupportedContent > app-navigation > ul > li:nth-child(1) > a')
    .should('exist').should('be.visible')
    .click();
    cy.url().should('include', `${baseUrl}/portal_notification`);
    cy.get('.page-title').should('have.text', 'Portal Notifications');
    cy.get('a.ng2-smart-action').should('be.visible')
    .first().click();
    cy.get('div.swal2-popup.swal2-modal.swal2-show').should('contain.text', '');
    cy.get('button.swal2-close').should('be.visible')
    .click();
    })
});
