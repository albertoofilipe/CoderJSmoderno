interface Usuario {
    id: number | string
    nome: string
    idade?: number
    email: string
    ativo: boolean
}

let usuario: Usuario = {
    id: 1,
    nome: 'João',
    email: 'joao@example.com',
    ativo: true
}

console.log(usuario)