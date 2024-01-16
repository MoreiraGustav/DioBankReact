import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'Gustavo@dio'
    it('deve exibir um alert de boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem Vindo ${mockEmail}`)
    })

    it('nao deve exibir a mensagem de boas vindas' , () => {
        login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo')
    }) 
})