it('tests cypress', () => {
    cy.visit('http://localhost:3000');

    cy.get('#username').type('user');
    cy.get('#password').type('pass');
    cy.get('.btn').click();

    cy.get('#greeting').should('have.text',' Welcome  user');
})