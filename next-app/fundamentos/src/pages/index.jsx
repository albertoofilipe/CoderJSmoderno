import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" cor="#13ffdf" />
            <Navegador destino="/exemplo" texto="Exemplo" cor="crimson" />
            <Navegador destino="/jsx" texto="JSX" cor="dodgerblue" />
            <Navegador destino="/navegacao/" texto="Navegação #01" cor="green" />
            <Navegador destino="/cliente/sp-2/321" texto="Navegação #02" cor="orange" />
            <Navegador destino="/estado/" texto="Componente com estado" cor="pink" />
            <Navegador destino="/integracao_1/" texto="Integração com API  #01" cor="#5c359b" />
            <Navegador destino="/estatico/" texto="Conteudo Estático" cor="#b88888" />
        </div>
    )
}