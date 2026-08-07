export default function Jsx() {
    const titulo = <h1>JSX é um Conceito central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toLocaleUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({ nome: 'Alberto', idade: 23 })}
            </p>
        </div>
    )
}