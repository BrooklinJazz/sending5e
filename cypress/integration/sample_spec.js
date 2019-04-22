describe('Visiting Site', function() {
  it('visits the web page on localhost:3000', function() {
    cy.visit("")
    cy.url().should('eq', "localhost:3000")
  });
});
