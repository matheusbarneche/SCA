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
    administrativo.navClick();
    administrativo.inputSCAform('Matheus');
    administrativo.selectPeriod('Agosto 2019', '1564628400000');
    administrativo.getPrimaryButton();
    administrativo.HoursActionIconButton();
  });
  it('Baixar PDF e abrir planilha de horas em Faturamento>Horas por projeto', () => {
    administrativo.navClick();
    administrativo.PDFExecelNav();
    administrativo.FormSelect('SoftDesign', '1');
    administrativo.FormSelectActivity('Criação do novo SCA', '1');
    administrativo.FormSelectDate('Agosto - 15/ 08 a 14/ 09', '1564628400000');
    administrativo.PDFPrimaryButton();
    administrativo.PDFClick();
    administrativo.PDFActionButton();
    administrativo.PDFActionButtonSvg();
  });
  it('Baixar excel em faturamento>Horas por projeto', () => {
    administrativo.navClick();
    administrativo.PDFExecelNav();
    administrativo.FormSelect('SoftDesign', '1');
    administrativo.FormSelectActivity('Criação do novo SCA', '1');
    administrativo.FormSelectDate('Agosto - 15/ 08 a 14/ 09', '1564628400000');
    administrativo.getPrimaryButton();
    administrativo.getSecondaryButton();
  });
  // eslint-disable-next-line no-trailing-spaces
});

