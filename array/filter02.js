Array.prototype.filter2 = function (callback) {
    let newArray = []
    for (let indice = 0; indice < this.length; indice++) {
        if (callback(this[indice], indice, this)) {
            newArray.push(this[indice])
        }
    }

    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vídro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const filtrarProduto = produto => produto.preco >= 2400 && produto.fragil
let produtoCaroFragil = produtos.filter2(filtrarProduto)
console.log(produtoCaroFragil)