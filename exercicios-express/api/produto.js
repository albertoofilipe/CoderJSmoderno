module.exports = (app, texto) => {
  function salvar(req, res) {
    res.send("Produto > salvar > " + texto)
  }

  function obter(rer, res) {
    res.send("Produto > obter " + texto)
  }

  app.post("/produto", salvar)
  app.get("/produto", obter)

  return { salvar, obter }
}