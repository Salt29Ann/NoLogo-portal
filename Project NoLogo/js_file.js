import '@testing-library/cypress/add-commands'

describe('My First Test with Cypress Testing Library', () => {
    it('finds the content "type"', () => {
      cy.visit('https://example.cypress.io');
      cy.findByText('type').click();
      cy.url().should('include', '/commands/actions');
      cy.findByLabelText('Email').type('fake@email.com');
      cy.findByLabelText('Email').should('have.value', 'fake@email.com');
    });
  });