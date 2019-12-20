/* eslint-disable no-undef */
context('Filtrar Cliente Faturamento', () => {
  it('Filtrar período de corte de um projeto de cliente', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get('div.flex-column.nav > div:nth-of-type(2) > a.nav-link').click();
    cy.wait(1000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(1)').select('SoftDesign').should('have.value', '1');
    cy.wait(2000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(2)').select('Criação do novo SCA').should('have.value', '1');
    cy.wait(1000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(3)').select('Agosto - 15/ 08 a 14/ 09').should('have.value', '1564628400000');
    cy.get('button.primaryButton').click();
    cy.wait(1000);
    // eslint-disable-next-line no-trailing-spaces
  });
});
