function Pessoa(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

export default Pessoa