import Link from "next/link"

import styles from '../styles/Layout.module.css'
import Navegador from "./Navegador"

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
            <Navegador texto="VOLTAR" destino="/" cor="red" />
            </div>
            <div className={styles.conteudo}>
            {props.children}
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil omnis eaque assumenda iste provident, vitae ad, saepe corporis illum vero ab pariatur inventore dicta? Vitae cum et delectus libero suscipit.</p>
        </div>
    )
}