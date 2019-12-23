import {LogoutPage} from '../../Pages/LogoutPage';

/* eslint-disable no-undef */
describe('SCA Front-End Automation Test', () => {
  const logout = new LogoutPage();
  beforeEach(() => {
    logout.navigate();
    logout.login('matheus.mendonca', 'teste123');
    logout.goto();
  });
  it('Deslogar e voltar a tela de login', () => {
   logout.Logout();
  });
  // eslint-disable-next-line no-trailing-spaces
});

