/* eslint-disable no-undef */
context('Baixar excel faturamento', () => {
  it('Baixar excel em faturamento>Horas por projeto', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.wait(1000);
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .nav-link').click();
    cy.wait(1000);
    cy.get('form > .align-items-center > :nth-child(2)').select('SoftDesign').should('have.value', '1');
    cy.wait(2000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(2)').select('Criação do novo SCA').should('have.value', '1');
    cy.wait(1000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(3)').select('Agosto - 15/ 08 a 14/ 09').should('have.value', '1564628400000');
    cy.wait(2000);
    cy.get('.primaryButton').click();
    cy.wait(2000);
    cy.get('button.secondaryButton').click();
    // eslint-disable-next-line no-trailing-spaces
  });
});
