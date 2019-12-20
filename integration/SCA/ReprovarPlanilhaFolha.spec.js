/* eslint-disable no-undef */
context('Reprovar planilha de horas mês', () => {
  it('Reprovar planilha de horas enviada', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.wait(1000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(3) > button.btn.text-center.linkButton.null').click();
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
    cy.wait(1000);
    cy.get('div.containerSize.col > div:nth-of-type(3) > button.secondaryButton').click();
    cy.wait(1000);
    cy.get('div.DayPickerInput > input.inputSca.text-center').focus();
    cy.wait(1000);
    cy.get('div.modalFooter.modal-footer > button.primaryButton').focus();
    cy.wait(1000);
    cy.get('div.modalFooter.modal-footer > button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get('.secondaryButton').click();
    cy.wait(1000);
    cy.get('.inputSca').type('Matheus');
    cy.wait(1000);
    cy.get('select').select('Setembro 2019').should('have.value', '1567306800000');
    cy.wait(2000);
    cy.get('button.primaryButton > svg').click();
    cy.wait(2000);
    cy.get('a > button.actionIcon > svg').click();
    cy.wait(1000);
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br/administrative/timesheet/3?date=1567306800000');
    cy.get(':nth-child(4) > .primaryButton').click();
    cy.get('.textareaSca').type('revise suas horas');
    cy.get('div.modalFooter.modal-footer > button.primaryButton').click();
    cy.wait(1000);
    // eslint-disable-next-line indent
          // eslint-disable-next-line no-trailing-spaces
  });
});
