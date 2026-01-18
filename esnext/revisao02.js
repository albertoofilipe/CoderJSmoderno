// Arrow Function
const soma = (a, b) => a + b
console.log(soma(20, 10))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log(texto = 'node') {
    console.log(texto)
}

log('JS')

// Operador rest
function total(...numero) {
    let total = 0
    numero.forEach(n => total += n)
    return total
}

console.log(total(10, 10, 10, 98, 10))