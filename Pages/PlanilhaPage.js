/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export class PlanilhaPage {
    navigate() {
      cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    }

    login(user, password) {
      cy.get('div.form-group > input:first-child').type(user);
      cy.get('div.form-group > input:nth-of-type(2)').type(password);
      cy.get('button.primaryButton').click();
    }

    goto() {
        cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    }

    inputHora1(hora) {
        cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(2) > div.row > div:first-child > div:first-child > input.text-center.inputSca').type(hora);
    }

    inputHora2(hora2) {
        cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(2) > div.row > div:first-child > div:nth-of-type(2) > input.text-center.inputSca').type(hora2);
    }

    inputButton() {
    cy.get(':nth-child(3) > .primaryButton').click();
    }

    acessApropriation() {
    cy.get(':nth-child(9) > :nth-child(3) > .p-0').click();
    }

    input1(hora) {
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(2) > input.text-center.inputSca.null').type(hora);    
    }

    focus1() {
    cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(3) > .react-autosuggest__container > .inputSca').focus();
    }

    click() {
    cy.get('#react-autowhatever-projectInput--item-0 > span').click();
    }

    focus2() {
    cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(4) > .react-autosuggest__container > .inputSca').focus();
    }

    tableBodyButton() {
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(6) > button.actionIcon > svg').click();
    }

    primmaryButton() {
    cy.get('div.containerSize.col > div:nth-of-type(3) > button.primaryButton').click();
    }

    delete() {
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr:first-child > td.text-center.my-auto > button.actionIcon > svg').click();
    }

    secondaryButton() {
    cy.get('div.containerSize.col > div:nth-of-type(4) > button.secondaryButton').click();
    }

    modalButton() {
    cy.get('div.modalFooter.modal-footer > button.primaryButton').click();
    }
  }
