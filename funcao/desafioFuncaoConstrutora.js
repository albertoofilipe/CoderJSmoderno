export function Pessoa(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Pedro')
p1.falar()
console.log(p1.nome)

const p2 = new Pessoa('Pedro')
p1.falar()
console.log(p2.nome)