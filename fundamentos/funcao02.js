// Armazenando uma função em uma variavel
const imprimirSoma = function (x ,y) {
    console.log(x + y)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (x, y) => {
    return x + y
}

console.log(soma(3, 3))

// Retorno implícito
const subtracao = (x, y) => x - y

console.log(subtracao(9, 4))

const imprimeNome = n => console.log(`Olá ${n}`)

imprimeNome('Alberto')