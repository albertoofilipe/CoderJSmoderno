import Link from 'next/link'
import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS modularizado">
            <div className={styles.roxo}>
            <h1>Estilo usando CSS Módulo!</h1>
        </div>
        </Layout>
    )
}