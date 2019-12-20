/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
export class AtividadesPage {
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

    filtroAtividade(status, value) {
        cy.get('select').select(status).should('have.value', value);
    }

    inputFiltro(atividade) {
    cy.get('.inputFiltro').type(atividade);
    }

    primmaryButton() {
    cy.get('button.primaryButton.searchButton').click();
    }

    percentageButton() {
        cy.get(':nth-child(1) > :nth-child(6) > .pButton > :nth-child(2)').click({ force: true });
    }

    playButton() {
    cy.get('tbody > tr:first-child > td:nth-of-type(7) > button.playButton').click();
    }

    pauseButton() {
        cy.get('tbody > tr:first-child > td:nth-of-type(7) > button.stopButton').click();
    }
  }

