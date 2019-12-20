/* eslint-disable no-undef */
context('Administrativo abrir planilha de horas colaborador', () => {
  it('Administrativo abrir planilha de horas colaborador', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get('input.inputSca.form-control').type('Matheus');
    cy.wait(1000);
    cy.get('select').select('Agosto 2019').should('have.value', '1564628400000');
    cy.wait(1000);
    cy.get('.primaryButton');
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(7) > a > .actionIcon').click();
    cy.wait(1000);
    // eslint-disable-next-line indent
      // eslint-disable-next-line no-trailing-spaces
  });
});
