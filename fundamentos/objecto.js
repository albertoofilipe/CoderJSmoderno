const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['DescontoLegal'] = 0.40 // olá, mundo!

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,

    obj:{
        nota: 1,
        obj: {
            ppp: 1235
        }
    }
}

console.log(prod2)

'{ "nome": "Camisa Polo", "preco": "79.90"}'
