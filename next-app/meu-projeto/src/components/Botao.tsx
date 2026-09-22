interface BotaoProps {
  cor?: "green" | "blue" | "gray"
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  let corClasse = ""

  switch (props.cor) {
    case "blue":
      corClasse = "from-blue-400 to-blue-700"
      break

    case "gray":
      corClasse = "from-gray-400 to-gray-700"
      break

    default:
      corClasse = "from-green-400 to-green-700"
  }

  return (
    <button onClick={props.onClick}
      className={`
        bg-linear-to-r ${corClasse}
        text-white px-4 py-2 rounded-md
        cursor-pointer
        ${props.className ?? ""}
      `}
    >
      {props.children}
    </button>
  )
}