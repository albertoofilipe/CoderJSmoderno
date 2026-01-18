const executaFuncao = callback => {
    setTimeout(() => {
        callback
    }, 2000)
}

function imprimirNome(nome) {
    console.log(`Meu nome é ${nome}!`)
}

executaFuncao(imprimirNome('Alberto'))