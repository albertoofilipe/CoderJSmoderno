function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        id: 1,
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (er) {
        tratarErroELancar(er)
    } finally {
        console.log('Final!')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)