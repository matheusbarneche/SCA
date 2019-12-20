import { PlanilhaPage } from '../../Pages/PlanilhaPage';

/* eslint-disable no-undef */
describe('SCA Front-End Automation Test', () => {
  const planilha = new PlanilhaPage();
  beforeEach(() => {
    planilha.navigate();
    planilha.login('matheus.mendonca', 'teste123');
    planilha.goto();
  });
  it('preencher e salvar inputs da planilha de horas', () => {
    planilha.inputHora1('18:00');
    planilha.inputHora2('23:00');
    planilha.inputButton();
  });
  it('preencher e salvar apropriações na planilha de horas', () => {
    planilha.acessApropriation();
    planilha.input1('22:00');
    planilha.focus1();
    planilha.click();
    planilha.focus2();
    planilha.click();
    planilha.tableBodyButton();
    planilha.primmaryButton();
  });
  it('deletar apropriações na planilha de horas', () => {
    planilha.acessApropriation();
    planilha.delete();
  });
  it('Submeter horas reprovadas planilha de horas enviada', () => {
    planilha.secondaryButton();
    planilha.modalButton();
  });
  // eslint-disable-next-line no-trailing-spaces
});
