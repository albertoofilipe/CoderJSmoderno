interface Animal {
    id: number | string
    nome: string
    tipo: 'cachorro' | 'gato' | 'passaro'
}

interface Cachorro extends Animal {
    tipo: 'cachorro'
    raca: string
    dono: string
}