class Usuario {
    id: number | string
    nome: string
    email: string

    constructor(id: number | string, nome: string, email: string) {
        this.id = id
        this.nome = nome
        this.email = email
    }
}

const usuario = new Usuario(1, 'João', 'joao@example.com')
console.log(usuario)