import { Metadata } from "../components/Metadata"

const Terms = () => {
  return (
    <>
      <Metadata
        title="Nossos Termos"
        description="Encontre aqui os termos de uso do site."
        canonical="/terms"
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mb-5 h-screen">
        <div className="flex flex-col border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Termos de Uso</h1>
        </div>
        <p className="text-gray-800 text-justify mt-5">
          Ao acessar ao <b>Dev Helper</b> você deve estar ciente e de acordo com os termos de uso
          aqui estabelecidos. Caso não esteja de acordo com os termos, por favor, não utilize o
          site. O<b>Dev Helper</b> se reserva ao direito de alterar a qualquer momento os termos de
          uso.
        </p>

        <div className="flex flex-col border-b border-gray-200 mt-10 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Licença de Uso</h1>
        </div>
        <p className="text-gray-800 text-justify mt-5">
          O <b>Dev Helper</b> garante acesso limitado apenas aos que estiverem de acordo e cumprirem
          os termos de uso. O <b>Dev Helper</b> se reserva ao direito de limitar o acesso a qualquer
          um, a qualquer momento e por qualquer motivo.
        </p>

        <div className="flex flex-col border-b border-gray-200 mt-10 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Responsabilidade de Uso
          </h1>
        </div>
        <p className="text-gray-800 text-justify mt-5">
          Todos os conteúdos deste site são apenas para fins informativos, não devem ser
          considerados completos, atualizados, e não se destinam a ser utilizado no lugar de uma
          consulta jurídica, médica, financeira, ou de qualquer outro profissional. Os conteúdos são
          fornecidos sem qualquer tipo de garantia. Todo e qualquer risco da utilização dos
          conteúdos é assumido pelo próprio usuário.
        </p>
      </section>
    </>
  )
}

export default Terms
