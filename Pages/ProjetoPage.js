/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export class ProjetoPage {
    navigate() {
      cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    }

    login(user, password) {
      cy.get('div.form-group > input:first-child').type(user);
      cy.get('div.form-group > input:nth-of-type(2)').type(password);
      cy.get('button.primaryButton').click();
    }

    goto() {
        cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    }
  }

