function salvar(req, res) {
    res.send('Usuário > salar')
}

function obter(req, res) {
    res.send('usuário > obter')
}

module.exports = { salvar, obter }