import { AtividadesPage } from '../../Pages/AtividadesPage';


/* eslint-disable no-undef */
describe('SCA Front-End Automation Test', () => {
  const atividades = new AtividadesPage();
  beforeEach(() => {
    atividades.navigate();
    atividades.login('matheus.mendonca', 'teste123');
    atividades.goto();
  });
  it('Select atividades em progresso', () => {
    atividades.filtroAtividade('Em andamento', 'inProgress');
  });
  it('filtrar atividades Tela Atividades', () => {
    atividades.filtroAtividade('Em andamento', 'inProgress');
    atividades.inputFiltro('Desenvolvimento SCA');
    atividades.primmaryButton();
  });
  it('Select Tarefas não iniciadas', () => {
    atividades.filtroAtividade('Não iniciados', 'NotStarted');
  });
  it('Select Atividades Finalizadas', () => {
    atividades.filtroAtividade('Finalizados', 'Finished');
  });
  it('percentual de atividades', () => {
    atividades.percentageButton();
  });
  it('Play em atividades', () => {
    atividades.filtroAtividade('Em andamento', 'inProgress');
    atividades.playButton();
  });
  it('Pause em atividades', () => {
    atividades.filtroAtividade('Em andamento', 'inProgress');
    atividades.pauseButton();
  });
  // eslint-disable-next-line no-trailing-spaces
});
