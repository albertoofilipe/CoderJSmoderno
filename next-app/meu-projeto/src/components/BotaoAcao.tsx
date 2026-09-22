interface BotaoAcaoProps {
    children: React.ReactNode
    cor: string
    onClick?: () => void
}

export default function BotaoAcao(props: BotaoAcaoProps) {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className={`
                flex justify-center items-center
                rounded-full p-2 m-1 cursor-pointer
                ${props.cor}
                hover:bg-purple-50
            `}
        >
            {props.children}
        </button>
    )
}