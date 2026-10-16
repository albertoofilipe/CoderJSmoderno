class Pessoa {
    nome: string
    age: number
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.age} anos.`)
    }
}

class Aluno extends Pessoa {
    
}
