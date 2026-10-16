interface Especificacao {
    id: number | string
    nome: string
    descricao: string
    [extraProps: string]: any | number | string | boolean | undefined
}

let computador: Especificacao = {
    id: 1,
    nome: 'Notebook',
    descricao: 'Notebook de alto desempenho'
} 

computador['preco'] = 2500
computador['emEstoque'] = true
console.log(computador)