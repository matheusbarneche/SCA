/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export class AdministrativoPage {
  navigate() {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
  }

  login() {
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
  }
}
