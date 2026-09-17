import Layout from "../components/Layout"

export function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      numero: Math.random(),
    },
  }
}

export default function Estatico(props) {
  return (
    <Layout titulo="Conteúdo Estático">
      <div>{props.numero}</div>
    </Layout>
  )
}
