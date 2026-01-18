const calcMrdia = (...n) => {
    let soma = 0
    n.forEach(num => {
        soma += num
    })

    let media = soma / n.length
    return media.toFixed(2)
}

console.log(calcMrdia(10, 10, 20, 40))