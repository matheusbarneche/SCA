/* eslint-disable no-undef */
context('Sair SCA', () => {
  it('Deslogar e voltar a tela de login', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('a.nav-link > img').click();
    cy.wait(2000);
    // eslint-disable-next-line no-trailing-spaces
  });
});
