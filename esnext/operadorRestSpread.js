// operador ... rest(juntar)/Spread(espalhar)
// Usar rest

// usar Spread com objeto
const funcinario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcinario }
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela',]
console.log(grupoFinal)