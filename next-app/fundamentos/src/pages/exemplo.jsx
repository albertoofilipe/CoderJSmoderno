import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

export default function Exemplo() {
    return (
        <Layout titulo="Usando componente">
            <Cabecalho titulo="Página Home 1" />
            <Cabecalho titulo="Página Home 2"/>
        </Layout>
    )
}