/* eslint-disable no-undef */
context('Submeter horas reprovadas planilha de horas mês', () => {
  it('Submeter horas reprovadas planilha de horas enviada', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.wait(1000);
    cy.get('div.containerSize.col > div:nth-of-type(4) > button.secondaryButton').click();
    cy.wait(1000);
    cy.get('div.modalFooter.modal-footer > button.primaryButton').click();
    cy.wait(2000);
    // eslint-disable-next-line indent
            // eslint-disable-next-line no-trailing-spaces
  });
});
