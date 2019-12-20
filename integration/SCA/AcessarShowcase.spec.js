/* eslint-disable no-undef */
context('Acessar Showcase', () => {
  it('Acessar a tela do Showcase', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(6)').click();
    cy.wait(2000);
    // eslint-disable-next-line no-trailing-spaces
  });
});
