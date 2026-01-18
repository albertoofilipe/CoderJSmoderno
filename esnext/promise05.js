function funcionarOunao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }

        } catch (err) {
            reject(err)
        }
    })
}

funcionarOunao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(console.log)
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))