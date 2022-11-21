import { Metadata } from '../components/Metadata'

const About = () => {
  return (
    <>
      <Metadata
        title="Sobre nós"
        description="Encontre aqui as informações sobre o projeto e os desenvolvedores."
        canonical="/terms"
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 h-screen">
        <div className="flex flex-col border-b border-gray-200 pt-2 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            O que é o Dev Helper? 🤔
          </h1>
        </div>

        <p className="text-gray-600 pt-5 text-justify">
          Criado em 2022, o <b>Dev Helper</b> é o <b>auxiliar de todo desenvolvedor</b>.
          Disponibilizando ferramentas online e gratuitas de geração e validação de dados. Perfeito
          para ajudar estudantes de programação, programadores, analistas e testadores software no
          seu dia a dia.
        </p>

        <p className="text-gray-600 pt-5 text-justify">
          Todos os conteúdos e dados deste site são apenas para fins informativos, não devem ser
          considerados completos, atualizados, e não se destinam a ser utilizado no lugar de uma
          consulta jurídica, médica, financeira, ou de qualquer outro profissional. Os conteúdos são
          fornecidos sem qualquer tipo de garantia. Todo e qualquer risco da utilização dos
          conteúdos é assumido pelo próprio usuário.
        </p>
      </section>
    </>
  )
}

export default About
