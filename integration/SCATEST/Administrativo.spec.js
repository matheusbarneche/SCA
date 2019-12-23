import { AtividadesPage } from '../../Pages/AtividadesPage';
import { AdministrativoPage } from '../../Pages/AdministrativoPage';


/* eslint-disable no-undef */
describe('SCA Front-End Automation Test', () => {
  const administrativo = new AdministrativoPage();
  beforeEach(() => {
    administrativo.navigate();
    administrativo.login('matheus.mendonca', 'teste123');
    administrativo.goto();
  });
  it('Reprovar planilha de horas enviada', () => {
    administrativo.inputClick();
    administrativo.inputType('22:00');
    administrativo.focus1();
    administrativo.focus1Click();
    administrativo.foucs2();
    administrativo.focus2Click();
    administrativo.buttonactionIcon();
    administrativo.primaryButton();
    administrativo.secondaryButton();
    administrativo.focus3();
    administrativo.primaryButtonFocus();
    administrativo.primaryButtonClick();
    administrativo.navClick();
    administrativo.secondaryButtonClick();
    administrativo.ipuntSCA('Matheus');
    administrativo.selectPeriod('Setembro 2019', '1567306800000');
    administrativo.primaryButtonSvg();
    administrativo.buttonactionIconSvg();
    administrativo.visit();
    administrativo.textareaSca('revise suas horas');
    administrativo.primaryButtonClick();
    });
  it('Submeter horas reprovadas planilha de horas enviada', () => {
    administrativo.divSecondaryButton();
    administrativo.primaryButtonClick();  
  });
  it('Submeter horas reprovadas planilha de horas enviada', () => {
    administrativo.navClick();
    administrativo.selectPeriod('Setembro 2019', '1567306800000');
    administrativo.getPrimaryButton();
    administrativo.reprovedActionIcon();
    administrativo.visit();
    administrativo.reprovedPrimaryButton();
    administrativo.ModalFooterButton();  
  });
  it('baixar pdf na tela de folha de pagamento', () => {
    administrativo.navClick();
    administrativo.inputSCAform('Matheus');
    administrativo.selectPeriod('Agosto 2019', '1564628400000');
    administrativo.getPrimaryButton();
    administrativo.getSecondaryButton();
  });
  it('Baixar excel do mês', () => {
    administrativo.navClick();
    administrativo.secondaryButtonClick();
  });
  it('Administrativo abrir planilha de horas colaborador', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.get('input.inputSca.form-control').type('Matheus');
    cy.get('select').select('Agosto 2019').should('have.value', '1564628400000');
    cy.get('.primaryButton');
    cy.get(':nth-child(1) > :nth-child(7) > a > .actionIcon').click(); 
  });
  it('Baixar PDF e abrir planilha de horas em Faturamento>Horas por projeto', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    
    cy.get(':nth-child(2) > .nav-link').click();
    
    cy.get('form > .align-items-center > :nth-child(2)').select('SoftDesign').should('have.value', '1');
    
    cy.get('div.align-items-center.form-row > select:nth-of-type(2)').select('Criação do novo SCA').should('have.value', '1');
    
    cy.get('div.align-items-center.form-row > select:nth-of-type(3)').select('Agosto - 15/ 08 a 14/ 09').should('have.value', '1564628400000');
    cy.get('.primaryButton > .svg-inline--fa').click();
    
    cy.get(':nth-child(3) > .dx-g-bs4-cursor-pointer > .position-sticky > .oi').click();
    
    cy.get('a > .actionIcon > .svg-inline--fa').click();
    
    cy.get('tbody > tr:nth-of-type(4) > td:nth-of-type(8) > button.actionIcon > svg > path').click();
  });
  it('Baixar excel em faturamento>Horas por projeto', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    
    cy.get('button.primaryButton').click();
    
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    
    cy.get(':nth-child(2) > .nav-link').click();
    
    cy.get('form > .align-items-center > :nth-child(2)').select('SoftDesign').should('have.value', '1');
    
    cy.get('div.align-items-center.form-row > select:nth-of-type(2)').select('Criação do novo SCA').should('have.value', '1');
    
    cy.get('div.align-items-center.form-row > select:nth-of-type(3)').select('Agosto - 15/ 08 a 14/ 09').should('have.value', '1564628400000');
    
    cy.get('.primaryButton').click();
    
    cy.get('button.secondaryButton').click();
  });
  // eslint-disable-next-line no-trailing-spaces
});

