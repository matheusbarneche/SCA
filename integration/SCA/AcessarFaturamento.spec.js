/* eslint-disable no-undef */
context('Acessar Faturamento', () => {
  it('Acessar a tela de faturamento horas por projetos', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(3500);
    cy.get('div.flex-column.nav > div:nth-of-type(2) > a.nav-link').click();
    cy.wait(1000);
    // eslint-disable-next-line no-trailing-spaces
  });
});
