/* eslint-disable no-undef */
context('Clicar PDF e Abrir Planilha faturamento', () => {
  it('Baixar PDF e abrir planilha de horas em Faturamento>Horas por projeto', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
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
    cy.get('.primaryButton > .svg-inline--fa').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dx-g-bs4-cursor-pointer > .position-sticky > .oi').click();
    cy.wait(2000);
    cy.get('a > .actionIcon > .svg-inline--fa').click();
    cy.wait(2000);
    cy.get('tbody > tr:nth-of-type(4) > td:nth-of-type(8) > button.actionIcon > svg > path').click();
    // eslint-disable-next-line no-trailing-spaces
  });
});
