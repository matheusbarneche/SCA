/* eslint-disable no-undef */
context('Deletar apropriação de atividades Planilha horas', () => {
  it('deletar apropriações na planilha de horas', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.wait(1000);
    cy.get(':nth-child(9) > :nth-child(3) > .p-0').click();
    cy.wait(2000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr:first-child > td.text-center.my-auto > button.actionIcon > svg').click();
  });
});
