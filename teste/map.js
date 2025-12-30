const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

let nums = [1, 2, 3, 4, 5, 6]

console.log(nums.map(function (e) {
    return e * 2
}))

alunos.forEach(aluno => console.log(aluno))