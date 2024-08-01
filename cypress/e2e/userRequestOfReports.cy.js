describe('User Requesting report on the portal', () => {
  it('Request of Terminal BD report', () => {
    cy.visit('https://merchant-dev.themerchantportal.com/login')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#loginform > :nth-child(1) > .form-control').clear('\tgalambosbernadett9@gmail.com');
    cy.get('#loginform > :nth-child(1) > .form-control').type('\tgalambosbernadett9@gmail.com');
    cy.get(':nth-child(2) > .form-control').click();
    cy.get('#loginform > :nth-child(1) > .form-control').clear('galambosbernadett9@gmail.com');
    cy.get('#loginform > :nth-child(1) > .form-control').type('galambosbernadett9@gmail.com');
    cy.get('#loginform > :nth-child(1) > .form-control').click();
    cy.get('#loginform > :nth-child(1) > .form-control').click();
    cy.get('#loginform > :nth-child(1) > .form-control').clear('galambosbernadett9@gmail.com');
    cy.get('#loginform > :nth-child(1) > .form-control').type('galambosbernadett9@gmail.com');
    cy.get(':nth-child(2) > .form-control').clear('galambosbernadett9@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('galambosbernadett9@gmail.com');
    cy.get('.col-xs-12 > .btn').click();
    cy.get(':nth-child(1) > .col-12 > .form-control').clear('galambosbernadett9@gmail.com');
    cy.get(':nth-child(1) > .col-12 > .form-control').type('galambosbernadett9@gmail.com');
    cy.get(':nth-child(2) > .col-12 > .form-control').clear('galambosbernadett9@gmail.com');
    cy.get(':nth-child(2) > .col-12 > .form-control').type('galambosbernadett9@gmail.com');
    cy.get('.btn').click();
    cy.get('.swal2-confirm').click();
    cy.get(':nth-child(1) > .has-arrow').click();
    cy.get('.user-profile.active > .collapse > :nth-child(2) > .sidebar-link').click();
    cy.get(':nth-child(2) > .has-arrow > .hide-menu').click();
    cy.get(':nth-child(2) > .has-arrow > .hide-menu').click();
    cy.get(':nth-child(7) > .waves-effect').click();
    cy.get(':nth-child(7) > .collapse > :nth-child(2) > .sidebar-link > .hide-menu').click();
    cy.get('#defaultFrom').click();
    cy.get('[data-day="06/01/2024"]').click();
    cy.get('#defaultTo').click();
    cy.get('[data-day="06/01/2024"]').click();
    cy.get(':nth-child(5) > .col-lg-6 > .btn').click();
    cy.get('#emails').clear('galambosbernadett9@gmail.com');
    cy.get('#emails').type('galambosbernadett9@gmail.com');
    cy.get('.modal-footer > .btn').click();
    cy.get('#sidebarnav > :nth-child(12) > .sidebar-link').click();
    cy.get('.btn > .mdi').click();
    cy.get('.ng2-smart-action > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})