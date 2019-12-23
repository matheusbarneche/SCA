/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export class AdministrativoPage {
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

 inputClick() {
  cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(3) > button.btn.text-center.linkButton.null').click();  
 }

 inputType(hora) {
  cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(2) > input.text-center.inputSca.null').type(hora);  
 }

 focus1() {
  cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(3) > .react-autosuggest__container > .inputSca').focus();  
 }

 focus1Click() {
  cy.get('#react-autowhatever-projectInput--item-0 > span').click();
 }

 foucs2() {
  cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(4) > .react-autosuggest__container > .inputSca').focus();  
 }

 focus2Click() {
  cy.get('#react-autowhatever-activityInput--item-0 > span').click();  
 }

 buttonactionIcon() {
  cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(6) > button.actionIcon > svg').click();  
 }

 primaryButton() {
  cy.get('div.containerSize.col > div:nth-of-type(3) > button.primaryButton').click();  
 }

 secondaryButton() {
  cy.get('div.containerSize.col > div:nth-of-type(3) > button.secondaryButton').click();  
 }

 focus3() {
  cy.get('div.DayPickerInput > input.inputSca.text-center').focus();  
 }

 primaryButtonFocus() {
  cy.get('div.modalFooter.modal-footer > button.primaryButton').focus();  
 }

 primaryButtonClick() {
  cy.get('div.modalFooter.modal-footer > button.primaryButton').click();  
 }

 navClick() {
  cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
 }
 
 secondaryButtonClick() {
  cy.get('.secondaryButton').click();  
 }

 ipuntSCA(name) {
  cy.get('.inputSca').type(name);
 }

 selectPeriod(month, date) {
  cy.get('select').select(month).should('have.value', date);
 }

 primaryButtonSvg() {
  cy.get('button.primaryButton > svg').click();  
 }

 buttonactionIconSvg() {
  cy.get('a > button.actionIcon > svg').click();  
 }

 visit() {
  cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br/administrative/timesheet/3?date=1567306800000');  
 }

 adminButton() {
  cy.get(':nth-child(4) > .primaryButton').click();  
 }

 textareaSca(text){
  cy.get('.textareaSca').type(text); 
 }

 divSecondaryButton() {
  cy.get('div.containerSize.col > div:nth-of-type(4) > button.secondaryButton').click();
 }

 getPrimaryButton() {
  cy.get('.primaryButton').click(); 
 }

 reprovedActionIcon() {
  cy.get('tbody > tr:nth-of-type(2) > td:nth-of-type(7) > a > button.actionIcon > svg').click(); 
 }

 reprovedPrimaryButton() {
  cy.get('div.row.justify-content-end > div:nth-of-type(2) > button.primaryButton').click(); 
 }

 ModalFooterButton() {
  cy.get('.modalFooter > .primaryButton').click(); 
 }

 inputSCAform(name) {
  cy.get('input.inputSca.form-control').type(name); 
 }

 getSecondaryButton() {
  cy.get('.secondaryButton').click();  
 }

 HoursActionIconButton(){
  cy.get(':nth-child(1) > :nth-child(7) > a > .actionIcon').click();   
 }

 PDFExcelNav() {
  cy.get(':nth-child(2) > .nav-link').click(); 
 }

 FormSelect(company, value) {
  cy.get('form > .align-items-center > :nth-child(2)').select(company).should('have.value', value);
 }

 FormSelectActivity(activity, value) {
  cy.get('div.align-items-center.form-row > select:nth-of-type(2)').select(activity).should('have.value', value);
 }

 FormSelectDate(month, date) {
  cy.get('div.align-items-center.form-row > select:nth-of-type(3)').select(month).should('have.value', value);
 }

 PDFPrimaryButton() {
  cy.get('.primaryButton > .svg-inline--fa').click();
 }

 PDFClick() {
  cy.get(':nth-child(3) > .dx-g-bs4-cursor-pointer > .position-sticky > .oi').click();  
 }

 PDFActionButton() {
  cy.get('a > .actionIcon > .svg-inline--fa').click(); 
 }

 PDFActionButtonSvg(){
  cy.get('tbody > tr:nth-of-type(4) > td:nth-of-type(8) > button.actionIcon > svg > path').click(); 
 }
}

