import { useState } from 'react'
import { InfoCnpj } from '../../../components/info/InfoCnpj'
import { Metadata } from '../../../components/Metadata'
import { Input } from '../../../components/primitives/Input'
import SideMenu from '../../../components/SideMenu'
import { validCnpj } from '../../../utils/helpers'

const Cnpj = () => {
  const [isValid, setIsValid] = useState(false)

  return (
    <>
      <Metadata
        title="Validador de CNPJ"
        description="Ferramenta online para verificar seu o número do CNPJ é válido ou falso. Calculamos o dígito verificador do CNPJ."
        canonical="/validator/cnpj"
      />
      <SideMenu section="validator" helper="cnpj">
        <div className="flex flex-col">
          <h2 className="mt-3 mb-5 mx-2 text-2xl font-medium tracking-tight text-gray-900">
            Validador de CNPJ
          </h2>
          <div className="flex flex-col sm:flex-row mx-2">
            <div className="max-w-sm">
              <Input
                label="Validar CNPJ"
                placeholder="Ex: 11111111111111"
                onChange={(e) => setIsValid(validCnpj(e.target.value))}
                maxLength={18}
                inputMode={'numeric'}
              />
            </div>
            <div className="flex items-center">
              <span className="text-xl text-gray-500 pt-3 sm:pt-7 sm:pl-3">Resultado:</span>
              {isValid ? (
                <span className="text-2xl text-green-500 pt-3 sm:pt-7 pl-2 font-medium">
                  Valido! 👍
                </span>
              ) : (
                <span className="text-2xl text-red-500 pt-3 sm:pt-7 pl-2 font-medium">
                  Inválido! 👎
                </span>
              )}
            </div>
          </div>
          <InfoCnpj />
        </div>
      </SideMenu>
    </>
  )
}

export default Cnpj
