Array.prototype.map2 = function (callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) { 
        newArray[i] = callback(this[i], i, this)
    }

    return newArray
}

const carinho = [
    '{"nome": "Boracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com os preços
const paraOjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carinho.map2(paraOjeto).map2(apenasPreco)

console.log(resultado)