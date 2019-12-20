/* eslint-disable no-undef */
context('Submeter horas reprovadas planilha de horas mês', () => {
  it('Submeter horas reprovadas planilha de horas enviada', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get('select').select('Setembro 2019').should('have.value', '1567306800000');
    cy.wait(1000);
    cy.get('.primaryButton');
    cy.wait(2000);
    cy.get('tbody > tr:nth-of-type(2) > td:nth-of-type(7) > a > button.actionIcon > svg').click();
    cy.wait(4000);
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br/administrative/timesheet/3?date=1567306800000');
    cy.wait(1000);
    cy.get('div.row.justify-content-end > div:nth-of-type(2) > button.primaryButton').click();
    cy.get('.modalFooter > .primaryButton').click();
    cy.wait(2000);
    // eslint-disable-next-line indent
              // eslint-disable-next-line no-trailing-spaces
  });
});
