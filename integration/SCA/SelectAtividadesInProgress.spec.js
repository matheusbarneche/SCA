/* eslint-disable no-undef */
context('Atividades Em Progresso', () => {
  it('Select atividades em progresso', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.wait(2000);
    cy.get('select').select('Em andamento').should('have.value', 'inProgress');
    cy.wait(2000);
  });
});
