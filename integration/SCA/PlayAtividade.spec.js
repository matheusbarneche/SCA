/* eslint-disable no-undef */
context('Atividades Play', () => {
  it('Play em atividades', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.wait(2000);
    cy.get('select').select('Em andamento').should('have.value', 'inProgress');
    cy.wait(2000);
    cy.get('tbody > tr:first-child > td:nth-of-type(7) > button.playButton').click();
    cy.wait(2000);
  });
});
