const express = require("express")
const app = express()
const bodyParser = require('body-parser')

const saudacao = require("./saldacaoMid")
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'Texto do params')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao("Alberto"))

app.use((req, res, next) => {
  console.log("Antes...")
  next()
})

app.get("/clientes/relatorio", (req, res) => {
  res.send(`Clinte relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
  // let corpo = ''
  // req.on('data', function(parte) {
  //   corpo += parte
  // })

  // req.on('end', function() {
  //   res.json(JSON.parse(corpo))
  // })
  res.send(JSON.stringify(req.body))
})

app.get("/clientes/:id", (req, res) => {
  res.send(`Clinte ${req.params.id} selecionado`)
})


app.get("/opa", (req, res, next) => {
  console.log("Durante...")
  res.json({
    data: [
      { id: 7, nome: "Ana", position: 1 },
      { id: 33, nome: "Bia", position: 3 },
      { id: 73, nome: "Pedro", position: 6 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  })

  next()

  //res.send('<h1>Estou bem!</h1><br><br><h2>Tipo HTML')
  // res.json({
  //     nome: 'iPad 32Gb',
  //     price: 1899.00,
  //     discount: 0.12
  // })
})

app.use((req, res) => {
  console.log("Depois...")
})

app.listen(3000, () => {
  console.log("Backend executando...")
})
