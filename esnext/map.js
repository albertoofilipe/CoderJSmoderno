const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react').framework)

const chaveVariadas = new Map([
    [function () {}, 'função'],
    [{}, 'Objeto'],
    [123, 'Número']
])
                                                                                                                         
chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size)

chaveVariadas.set(123, 'a')
chaveVariadas.set(1243, 'b')
console.log(chaveVariadas)