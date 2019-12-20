/* eslint-disable no-undef */
context('Preencher apropriação de atividades Planilha horas', () => {
  it('preencher e salvar apropriações na planilha de horas', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.wait(2000);
    cy.get(':nth-child(9) > :nth-child(3) > .p-0').click();
    cy.wait(2000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(2) > input.text-center.inputSca.null').type('22:00');
    cy.wait(1000);
    cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(3) > .react-autosuggest__container > .inputSca').focus();
    cy.wait(2000);
    cy.get('#react-autowhatever-projectInput--item-0 > span').click();
    cy.wait(2000);
    cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(4) > .react-autosuggest__container > .inputSca').focus();
    cy.wait(2000);
    cy.get('#react-autowhatever-activityInput--item-0 > span').click();
    cy.wait(1000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(6) > button.actionIcon > svg').click();
    cy.get('div.containerSize.col > div:nth-of-type(3) > button.primaryButton').click();
  });
});
