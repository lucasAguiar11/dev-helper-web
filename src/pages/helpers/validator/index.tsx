import { Metadata } from '../../../components/Metadata'
import SideMenu from '../../../components/SideMenu'
import ChoiceSVG from '../../../components/svgs/ChoiceSVG'

const Validator = () => {
  return (
    <>
      <Metadata
        title="Nossos Validadores"
        description="Ferramenta online para verificar se CPF ou CNPJ são válidos ou não. Calculamos o dígito verificador do CPF e CNPJ."
        canonical="/validator"
      />
      <SideMenu section="validator">
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

export default Validator
