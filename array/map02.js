const carinho = [
    '{"nome": "Boracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array com os preços
let preco = carinho.map(e => {
    let elJson = JSON.parse(e)
    return elJson.preco
})

console.log(preco)