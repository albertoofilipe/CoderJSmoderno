const primeiroElemento = arrayOuElemento => arrayOuElemento[0]
const letraMinuscula = letra => letra.toLowerCase()

let promessa = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
