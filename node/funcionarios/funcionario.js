const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f =>  f.pais === 'China'
const mulher  = f => f.genero === 'F'
const menorSalario = (func, funAtual) => {
    return func.salario < funAtual.salario ? func : funAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor sálario?
    const func = funcionarios
        .filter(chineses)
        .filter(mulher)
        .reduce(menorSalario)
    console.log(func)
})



