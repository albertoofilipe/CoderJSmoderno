interface Produto {
    id: number | string
    nome: string
    preco: number
    descricao?: string
    emEstoque: boolean
}

const p1: Produto = {
    id: 1,
    nome: 'Notebook',
    preco: 2500,
    emEstoque: true
}

console.log(p1)

const p2: Produto = {
    id: 2,
    nome: 'Mouse',
    preco: 100,
    emEstoque: true
}

console.log(p2)

const p3: Partial<Produto> = {
    id: 3,
    nome: 'Teclado'
}

console.log(p3)