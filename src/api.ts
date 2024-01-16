const conta = {
    email: 'Gustavo@dio',
    password: '1234',
    name: 'gustavo'

}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})