function criarProduto(nome = "Sem nome", preco = 0.01, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Bola', 1234, 0.01))
console.log(criarProduto('Cadeira', 8080))
console.log(criarProduto('Telefone', 50.000))
