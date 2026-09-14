import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import ComFilhos from "./components/basicos/ComFilhos"
import Card from "./components/layout/Card"
import Repeticao from "./components/basicos/Repeticao"
import Condicinal from "./components/basicos/Condicinal"
import CondicinalComIf from "./components/basicos/CondicinalComIf"
import Pai from "./components/comunicacao/direta/Pai"
import Super from "./components/comunicacao/indireta/Super"
import Input from "./components/form/input"
import Mega from "./components/mega/Mega"

import "./App.css"
import "./index.css"

export default (props) => {
  return (
    <div>
      <Card titulo="#10 - Mega" color="#008516">
        <Mega qtNumero={8}></Mega>
      </Card>
      <Card titulo="#09 - input" color="#005f85">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicação indireta" color="#9fff22">
        <Super></Super>
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#b5429c">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#02 Condicional Com IF" color="#FA6900">
        <CondicinalComIf numero={10} />
      </Card>
      <Card titulo="#01 Condicional" color="#E94C6F">
        <Condicinal numero={11} />
      </Card>
      <Card titulo="Exercício React.JS" color="#DF5">
        <Primeiro />
      </Card>
      <Card titulo="Exercício Next.JS" color="#960020">
        <ComFilhos>
          <ul>
            <li>Marta</li>
            <li>Paulo</li>
            <li>Rodrigo</li>
            <li>Alberto</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card color="#E94C6F">
        <ComParametro
          titulo="Meu site com REACT.JS"
          subtitulo="React.JS é muito INTERESSANTE!"
        />
        <ComParametro titulo="Teste 2" subtitulo="Teste 2" />
      </Card>
      <Card color="#00a2ff">
        <Repeticao />
      </Card>
    </div>
  )
}
