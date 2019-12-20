/* eslint-disable no-undef */
describe('Acesso ao SCA', () => {
  it('acessa a página do novo SCA', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br/');
    cy.wait(3500);
  });
});
