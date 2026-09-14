import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import ComFilhos from "./components/basicos/ComFilhos"
import Card from "./components/layout/Card"
import Repeticao from "./components/basicos/Repeticao"
import Condicinal from "./components/basicos/Condicinal"
import CondicinalComIf from "./components/basicos/CondicinalComIf"

import "./App.css"
import "./index.css"

export default (props) => {
  return (
    <div>
      <Card titulo="#02 Condicional Com IF">
        <CondicinalComIf numero={10} />
      </Card>
       <Card titulo="#01 Condicional">
        <Condicinal numero={11} />
      </Card>
      <Card titulo="Exercício React.JS">
        <Primeiro />
      </Card>
      <Card titulo="Exercício Next.JS">
        <ComFilhos>
          <ul>
            <li>Marta</li>
            <li>Paulo</li>
            <li>Rodrigo</li>
            <li>Alberto</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card>
        <ComParametro
          titulo="Meu site com REACT.JS"
          subtitulo="React.JS é muito INTERESSANTE!"
        />
        <ComParametro titulo="Teste 2" subtitulo="Teste 2" />
      </Card>
       <Card>
         <Repeticao />
        </Card>
    </div>
  )
}
