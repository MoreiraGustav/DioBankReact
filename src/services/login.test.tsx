import { login } from "./login"


describe('login', () => {


    const mockEmail = 'Gustavo@dio'
    it('deve exibir um alert de boas vindas caso o email seja valido', async () => {
      const response = await login(mockEmail)
       expect(response).toBeTruthy()
        
    })

    it('deve exibir um erro caso o email seja invalido' , async () => {
       const response = await login('emailinvalido@erro.com')
       expect(response).toBeFalsy()
      
    }) 
})