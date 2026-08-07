import Link from 'next/link'
import styles from '../styles/Estiloso.module.css'

export default function Estiloso() {
    return (
        <div className={styles.roxo}>
            <h1>Estilo usando CSS Módulo!</h1>
            <Link href="/">Voltar</Link>
        </div>
    )
}