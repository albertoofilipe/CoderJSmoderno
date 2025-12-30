const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vídro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return false
}))

const filtrarProduto = produto => produto.preco >= 2400 && produto.fragil
let produtoCaroFragil = produtos.filter(filtrarProduto)
console.log(produtoCaroFragil)