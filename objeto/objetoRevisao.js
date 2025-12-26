// Coleção dinâmica de pares chave/valores
const produto = new Object
produto.nome = 'Cadeira'
produto['marca Do Produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca Do Produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function () {
        // ..
        return this.condutores
    }
}

carro.proprietario.endereco.logradouro = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)
console.log(carro.condutores.length)
delete carro.condutores
console.log(carro.condutores)