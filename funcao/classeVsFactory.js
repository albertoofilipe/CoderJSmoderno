class Pessoa {
    constructor(nome) {
        this.nome = nome

    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Alberto')
p1.falar()

const criarPessoa = nome => {
    return {
        nome,
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Tiago')
p2.falar()