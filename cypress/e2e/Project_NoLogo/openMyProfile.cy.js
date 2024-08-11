// const user = require('../../fixtures/userLogin.js');

describe('Test No Logo Portal', () => {
  const baseUrl = Cypress.env('baseUrl');

  beforeEach(() => {
    cy.UserLogin();
    cy.wait(2000);
    cy.PasswordChange();
    cy.url().should('include', `${baseUrl}/starter`);
    });


  it.skip('Portal notification board view', () => {
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

  it('Dashboard overview', () => {
    // select all location assigned to the owner
    cy.get('#sidebarnav > li:nth-child(1) > a').should('be.visible').click()
    cy.get('#sidebarnav > li:nth-child(1) > ul > li:nth-child(1) > a')
    .should('be.visible')
    .should('have.text', 'All Merchants')
    .click();
   
    // date section in the Dashboard
    // check of data for previous period
    cy.get('input#defaultFrom.form-control.ng-valid.ng-touched.ng-dirty')
    .should('exist').click()
    cy.get('td[data-action="selectDay"][data-day="01/01/2024"].day')
    .should('not.be.disabled').click();
    cy.get('input#defaultTo.form-control.ng-touched.ng-dirty.ng-valid')
    .should('exist').click()
    cy.get('th.picker-switch[data-action="pickerSwitch"][colspan="5"][title="Select Month"]')
    .should('be.visible') .click()
    cy.get('span[data-action="selectMonth"].month').contains('Jan').click();
    cy.get('td[data-action="selectDay"][data-day="01/31/2024"].day')
    .should('not.be.disabled').click();
    cy.get('button.btn.btn-success.mr-1')
    .should('exist').click();
    cy.get('select.form-control.ng-untouched.ng-pristine.ng-valid').eq(1).select('Bar');
    cy.get('button.btn.btn-success.mr-1')
    .should('exist').click();

    // check of data for recent dates
    cy.get('select.form-control.ng-untouched.ng-pristine.ng-valid').eq(0)
    .select('Last week')
    .should('have.value', '2');
    cy.get('button.btn.btn-success.mr-1')
    .should('exist').click();
    cy.wait(2000);

    cy.contains('h6', 'Total Income')
    .parents('div.d-flex.no-block')  // return to the closest parent
    .find('h2')
    .should('be.visible')
    .should('not.be.empty')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.match(/^\d{1,3}(,\d{3})*$/);  // number format validation
    });

    cy.contains('h6', 'Approved Transactions')
    .parents('div.d-flex.no-block')  // return to the closest parent
    .find('h2')
    .should('be.visible')
    .should('not.be.empty')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.match(/^\d{1,3}(,\d{3})*$/);  // number format validation
    });

    
    cy.get('select.form-control.ng-touched.ng-dirty').eq(0)
    .select('This Month')
    .should('have.value', '3');
    cy.get('select.form-control.ng-touched.ng-dirty').eq(1)
    .select('Line')
    .should('have.value', 'line');
    cy.get('button.btn.btn-success.mr-1')
    .should('exist').click();
    cy.wait(2000);

    cy.contains('h6', 'Total Income')
    .parents('div.d-flex.no-block')  // return to the closest parent
    .find('h2')
    .should('be.visible')
    .should('not.be.empty')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.match(/^\d{1,3}(,\d{3})*$/);  // number format validation
    });

    cy.contains('h6', 'Approved Transactions')
    .parents('div.d-flex.no-block')  // return to the closest parent
    .find('h2')
    .should('be.visible')
    .should('not.be.empty')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.match(/^\d+$/);  // number format validation
    });

    // cy.get('.col-lg-9 > :nth-child(1) > .form-control').select('2');
    // cy.get('.btn').click();
    // cy.get('.col-lg-9 > :nth-child(1) > .form-control').select('4');
    // cy.get('.col-lg-6 > :nth-child(1) > .row').click();
    // cy.get('.btn').click();
    // cy.get('.col-lg-9 > :nth-child(1) > .form-control').select('1');
    // cy.get('#defaultFrom').click();
    // cy.get('.table > thead > :nth-child(1) > .picker-switch').click();
    // cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(1)').click();
    // cy.get('[data-day="01/01/2024"]').click();
    // cy.get('#defaultTo').click();
    // cy.get('.table > thead > :nth-child(1) > .picker-switch').click();
    // cy.get('.datepicker-months > .table-condensed > tbody > tr > td > :nth-child(1)').click();
    // cy.get('[data-day="01/31/2024"]').click();
    // cy.get('.btn').click();
    // cy.get('.ml-2 > .form-control').select('line');
    // cy.get('.rounded-circle').click();
    // cy.get('.dropdown-menu-right > :nth-child(3)').click();
    // cy.get('.auth-box > :nth-child(1) > :nth-child(2) > :nth-child(1)').click();
    // cy.get(':nth-child(1) > .col-12 > .form-control').clear('galambosbernadett9@gmail.com');
    // cy.get(':nth-child(1) > .col-12 > .form-control').type('galambosbernadett9@gmail.com');
    // cy.get('.form-horizontal').click();
    // cy.get(':nth-child(2) > .col-12 > .form-control').clear('1');
    // cy.get(':nth-child(2) > .col-12 > .form-control').type('12345Anna');
    // cy.get('.btn').click();
    // cy.get(':nth-child(1) > .col-12 > .form-control').click();
    // cy.get(':nth-child(1) > .col-12 > .form-control').click();
    // cy.get(':nth-child(1) > .col-12 > .form-control').clear('galambosbernadett9@gmail.com');
    // cy.get(':nth-child(1) > .col-12 > .form-control').type('galambosbernadett9@gmail.com');
   }) 




  //  afterEach(() => {
  //   // Return to the main page
  //   cy.visit(`${baseUrl}/starter`);
  //   cy.url().should('include', `${baseUrl}/starter`);
  // });
});
