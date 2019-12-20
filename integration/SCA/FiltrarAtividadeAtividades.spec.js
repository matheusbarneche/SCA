/* eslint-disable no-undef */
context('Atividades Filtrar Atividade', () => {
  it('filtrar atividades de projetos em atividades', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.wait(1000);
    cy.get('.dropdownFiltro').select('Em andamento').should('have.value', 'inProgress');
    cy.wait(2000);
    cy.get('.inputFiltro').type('Desenvolvimento SCA');
    cy.wait(2000);
    cy.get('button.primaryButton.searchButton').click();
  });
});
