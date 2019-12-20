import { AdministrativoPage } from '../../Pages/AdministrativoPage';

/* eslint-disable no-undef */
describe('SCA Front-End Automation Test', () => {
  const administrativo = new AdministrativoPage();
  
  beforeEach(() => {
    administrativo.navigate();
    administrativo.login();
  });

  it('acessa a página do novo SCA', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br/');
  });
  it('login scenario', () => {
  });
  it('clicar em atividades', () => {
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
  });
  it('Acessar planilha de horas', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.wait(4500);
  });
  it('acessar a tela projetos', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(3)').click();
  });
  it('acessar a tela portfolio', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(4)').click();
  });
  it('Acessar a tela do administrativo', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
  });
  it('Acessar a tela do Showcase', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(6)').click();
  });
  it('Deslogar e voltar a tela de login', () => {
    cy.get('a.nav-link > img').click();
    cy.wait(2000);
  });
  it('Select atividades em progresso', () => {
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.wait(2000);
    cy.get('select').select('Em andamento').should('have.value', 'inProgress');
    cy.wait(1000);
  });
  it('filtrar atividades Tela Atividades', () => {
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.get('.dropdownFiltro').select('Em andamento').should('have.value', 'inProgress');
    cy.wait(1000);
    cy.get('.inputFiltro').type('Desenvolvimento SCA');
    cy.wait(1000);
    cy.get('button.primaryButton.searchButton').click();
  });
  it('Select Tarefas não iniciadas', () => {
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.wait(2000);
    cy.get('select').select('Não iniciados').should('have.value', 'NotStarted');
    cy.wait(1000);
  });
  it('Select Atividades Finalizadas', () => {
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.wait(2000);
    cy.get('select').select('Finalizados').should('have.value', 'Finished');
    cy.wait(1000);
  });
  it('percentual de atividades', () => {
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.get(':nth-child(1) > :nth-child(6) > .pButton > :nth-child(2)').click({ force: true });
  });
  it('Play em atividades', () => {
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.get('select').select('Em andamento').should('have.value', 'inProgress');
    cy.get('tbody > tr:first-child > td:nth-of-type(7) > button.playButton').click();
  });
  it('Pause em atividades', () => {
    cy.get('div.mr-auto.navbar-nav > a:first-child').click();
    cy.get('select').select('Em andamento').should('have.value', 'inProgress');
    cy.wait(1000);
    cy.get('tbody > tr:first-child > td:nth-of-type(7) > button.stopButton').click();
  });
  it('preencher e salvar inputs da planilha de horas', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(2) > div.row > div:first-child > div:first-child > input.text-center.inputSca').type('19:00');
    cy.wait(2000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(2) > div.row > div:first-child > div:nth-of-type(2) > input.text-center.inputSca').type('22:00');
    cy.wait(2000);
    cy.get(':nth-child(3) > .primaryButton').click();
    cy.wait(2000);
  });
  it('preencher e salvar apropriações na planilha de horas', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.get(':nth-child(9) > :nth-child(3) > .p-0').click();
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(2) > input.text-center.inputSca.null').type('22:00');
    cy.wait(1000);
    cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(3) > .react-autosuggest__container > .inputSca').focus();
    cy.wait(2000);
    cy.get('#react-autowhatever-projectInput--item-0 > span').click();
    cy.wait(2000);
    cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(4) > .react-autosuggest__container > .inputSca').focus();
    cy.wait(2000);
    cy.get('#react-autowhatever-activityInput--item-0 > span').click();
    cy.wait(1000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(6) > button.actionIcon > svg').click();
    cy.get('div.containerSize.col > div:nth-of-type(3) > button.primaryButton').click();
  });
  it('deletar apropriações na planilha de horas', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.wait(1000);
    cy.get(':nth-child(9) > :nth-child(3) > .p-0').click();
    cy.wait(2000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr:first-child > td.text-center.my-auto > button.actionIcon > svg').click();
  });
  it('Reprovar planilha de horas enviada', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(2)').click();
    cy.wait(1000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(9) > td:nth-of-type(3) > button.btn.text-center.linkButton.null').click();
    cy.wait(2000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(2) > input.text-center.inputSca.null').type('22:00');
    cy.wait(1000);
    cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(3) > .react-autosuggest__container > .inputSca').focus();
    cy.wait(2000);
    cy.get('#react-autowhatever-projectInput--item-0 > span').click();
    cy.wait(2000);
    cy.get('.show > .p-4 > .table > .appropriation-table-body > .row > :nth-child(4) > .react-autosuggest__container > .inputSca').focus();
    cy.wait(2000);
    cy.get('#react-autowhatever-activityInput--item-0 > span').click();
    cy.wait(1000);
    cy.get('tbody.timesheetTableBody > tr:nth-of-type(10) > td.row.justify-content-center > table.table > tbody.appropriation-table-body > tr.row.spreadsheetLine > td:nth-of-type(6) > button.actionIcon > svg').click();
    cy.get('div.containerSize.col > div:nth-of-type(3) > button.primaryButton').click();
    cy.wait(1000);
    cy.get('div.containerSize.col > div:nth-of-type(3) > button.secondaryButton').click();
    cy.wait(1000);
    cy.get('div.DayPickerInput > input.inputSca.text-center').focus();
    cy.wait(1000);
    cy.get('div.modalFooter.modal-footer > button.primaryButton').focus();
    cy.wait(1000);
    cy.get('div.modalFooter.modal-footer > button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get('.secondaryButton').click();
    cy.wait(1000);
    cy.get('.inputSca').type('Matheus');
    cy.wait(1000);
    cy.get('select').select('Setembro 2019').should('have.value', '1567306800000');
    cy.wait(2000);
    cy.get('button.primaryButton > svg').click();
    cy.wait(3000);
    cy.get('a > button.actionIcon > svg').click();
    cy.wait(1000);
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br/administrative/timesheet/3?date=1567306800000');
    cy.get(':nth-child(4) > .primaryButton').click();
    cy.get('.textareaSca').type('revise suas horas');
    cy.get('div.modalFooter.modal-footer > button.primaryButton').click();
    cy.wait(1000);
  });
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
  });
  it('Submeter horas reprovadas planilha de horas enviada', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get('select').select('Setembro 2019').should('have.value', '1567306800000');
    cy.wait(1000);
    cy.get('.primaryButton');
    cy.wait(2000);
    cy.get('tbody > tr:nth-of-type(2) > td:nth-of-type(7) > a > button.actionIcon > svg').click();
    cy.wait(4000);
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br/administrative/timesheet/3?date=1567306800000');
    cy.wait(1000);
    cy.get('div.row.justify-content-end > div:nth-of-type(2) > button.primaryButton').click();
    cy.get('.modalFooter > .primaryButton').click();
    cy.wait(2000);
  });
  it('baixar pdf na tela de folha de pagamento', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.get('input.inputSca.form-control').type('Matheus');
    cy.get('select').select('Agosto 2019').should('have.value', '1564628400000');
    cy.wait(1000);
    cy.get('.primaryButton').click();
    cy.wait(1000);
    cy.get('.secondaryButton').click();
    cy.wait(1000);
  });
  it('Baixar excel do mês', () => {
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get('button.secondaryButton').click();
  });
  it('Administrativo abrir planilha de horas colaborador', () => {
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
  });
  it('Baixar PDF e abrir planilha de horas em Faturamento>Horas por projeto', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .nav-link').click();
    cy.wait(1000);
    cy.get('form > .align-items-center > :nth-child(2)').select('SoftDesign').should('have.value', '1');
    cy.wait(2000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(2)').select('Criação do novo SCA').should('have.value', '1');
    cy.wait(1000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(3)').select('Agosto - 15/ 08 a 14/ 09').should('have.value', '1564628400000');
    cy.get('.primaryButton > .svg-inline--fa').click();
    cy.wait(1000);
    cy.get(':nth-child(3) > .dx-g-bs4-cursor-pointer > .position-sticky > .oi').click();
    cy.wait(1000);
    cy.get('a > .actionIcon > .svg-inline--fa').click();
    cy.wait(1000);
    cy.get('tbody > tr:nth-of-type(4) > td:nth-of-type(8) > button.actionIcon > svg > path').click();
  });
  it('Baixar excel em faturamento>Horas por projeto', () => {
    cy.visit('http://scaweb-develop.ingress.softdesign-rs.com.br');
    cy.get('div.form-group > input:first-child').type('matheus.mendonca');
    cy.get('div.form-group > input:nth-of-type(2)').type('teste123');
    cy.wait(1000);
    cy.get('button.primaryButton').click();
    cy.wait(2000);
    cy.get('div.mr-auto.navbar-nav > a:nth-of-type(5)').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .nav-link').click();
    cy.wait(1000);
    cy.get('form > .align-items-center > :nth-child(2)').select('SoftDesign').should('have.value', '1');
    cy.wait(2000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(2)').select('Criação do novo SCA').should('have.value', '1');
    cy.wait(1000);
    cy.get('div.align-items-center.form-row > select:nth-of-type(3)').select('Agosto - 15/ 08 a 14/ 09').should('have.value', '1564628400000');
    cy.wait(2000);
    cy.get('.primaryButton').click();
    cy.wait(2000);
    cy.get('button.secondaryButton').click();
  });
  // eslint-disable-next-line no-trailing-spaces
});
