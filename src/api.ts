const conta = {
    email: 'Gustavo@dio',
    password: '1234',
    name: 'Gustavo',
    balance: 2100

}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})