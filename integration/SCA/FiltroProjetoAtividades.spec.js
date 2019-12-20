/* eslint-disable no-undef */
context('Atividades Filtrar Projeto', () => {
  it('filtrar projetos em atividades', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(3500);
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.wait(3500);
    cy.get('div.align-items-center.form-row > input:nth-of-type(1)').type('Teste do Novo SCA');
    cy.wait(3500);
  });
});
