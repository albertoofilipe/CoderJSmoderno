import Cliente from "@/core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icons"
import BotaoAcao from "./BotaoAcao"

interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado 

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes? renderizarAcoes(cliente): false}
        </tr>
      )
    })
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
            <BotaoAcao onClick={() => props.clienteSelecionado?.(cliente)} cor="text-green-600">{IconeEdicao}</BotaoAcao>
        ) : false }

         {props.clienteExcluido ? (
            <BotaoAcao onClick={() => props.clienteExcluido?.(cliente)} cor="text-red-600">{IconeLixo}</BotaoAcao>
        ) : false }
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
                text-gray-100
                bg-linear-to-r from-purple-500 to-purple-800 
            `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}
