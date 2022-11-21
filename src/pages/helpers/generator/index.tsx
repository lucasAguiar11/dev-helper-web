import { Metadata } from '../../../components/Metadata'
import SideMenu from '../../../components/SideMenu'
import ChoiceSVG from '../../../components/svgs/ChoiceSVG'

const Generator = () => {
  return (
    <>
      <Metadata
        title="Nossos Geradores"
        description="Ferramenta online para gerar CPF e CNPJ válidos. Geramos o dígito verificador do CPF e CNPJ."
        canonical="/helpers/generator"
      />
      <SideMenu section="generator">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-base mt-5 text-gray-600">
            Selecione um <span className="text-primary font-bold">&quot;helpers&quot;</span> para
            começar
          </p>
          <ChoiceSVG className="w-96" />
          <a className="text-xs" href="https://storyset.com/people">
            People illustrations by Storyset
          </a>
        </div>
      </SideMenu>
    </>
  )
}

export default Generator
