function unirObj(obj1 = {}, obj2 = {}) {
    return {
        ...obj1,
        ...obj2
    }
}

const obj1 = {
    nome: 'Obj1',
    idade: 12
}

const obj2 = {
    nome: 'Obj2',
    cidade: 'LDA'
}

console.log(unirObj(obj1, obj2))