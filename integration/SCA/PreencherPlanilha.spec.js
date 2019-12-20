/* eslint-disable no-undef */
context('Preencher Planilha horas', () => {
  it('preencher e salvar inputs da planilha de horas', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.wait(2000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(2) > div.row > div:first-child > div:first-child > input.text-center.inputSca').type('19:00');
    cy.wait(2000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(2) > div.row > div:first-child > div:nth-of-type(2) > input.text-center.inputSca').type('22:00');
    cy.wait(2000);
    cy.get(':nth-child(3) > .primaryButton').click();
    cy.wait(2000);
  });
});
