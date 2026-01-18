function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resulve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número proibido!')
        } else {
            resulve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtNumeros, min, max, tentativa = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(min, max, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativa > 100) {
            throw "Não deu certo!"
        }
        gerarMegaSena(qtNumeros, min, max, tentativa + 1)
    }
}


gerarMegaSena(10, 1, 60)
    .then(console.log)
    .catch(console.log)
