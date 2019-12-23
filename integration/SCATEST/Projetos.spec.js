import { ProjetoPage } from '../../Pages/ProjetoPage';


/* eslint-disable no-undef */
describe('SCA Front-End Automation Test', () => {
  const projeto = new ProjetoPage();
  beforeEach(() => {
    projeto.navigate();
    projeto.login('matheus.mendonca', 'teste123');
    projeto.goto();
  });
  // eslint-disable-next-line no-trailing-spaces
});
