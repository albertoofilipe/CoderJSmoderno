const imprimirResultado =  function (nota) {
    switch (Math.floor(nota)) {
        case 1:
            console.log('Nota 1')
        break
        case 2:
            console.log('Nota 2')
        break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(1)
imprimirResultado(2)
imprimirResultado(0)

const ver = 4 > 5 ? "Sim" : "Não"
console.log(ver)

