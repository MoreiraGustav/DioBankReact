import { login } from "./login"

describe('login', () => {
  const mockEmail = 'Gustavo@dio';
  const mockPassword = '1234';

  it('deve exibir um alert de boas vindas caso o email e senha sejam válidos', async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it('deve exibir um erro caso o email seja inválido ou senha seja inválida', async () => {
    const responseInvalidEmail = await login('emailinvalido@erro.com', mockPassword);
    const responseInvalidPassword = await login(mockEmail, 'senha_invalida');
    
    expect(responseInvalidEmail).toBeFalsy();
    expect(responseInvalidPassword).toBeFalsy();
  });
});
