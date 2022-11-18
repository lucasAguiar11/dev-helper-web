import { useState } from 'react'
import { InfoCpf } from '../../../components/info/InfoCpf'
import { Metadata } from '../../../components/Metadata'
import { Input } from '../../../components/primitives/Input'
import SideMenu from '../../../components/SideMenu'
import { validCpf } from '../../../utils/helpers'

const Cpf = () => {
  const [isValid, setIsValid] = useState(false)

  return (
    <>
      <Metadata
        title="Validador de CPF"
        description="Ferramenta online para verificar seu o número do CPF é válido ou falso. Calculamos o dígito verificador do CPF."
        canonical="/validator/cpf"
      />
      <SideMenu section="validator" helper="cpf">
        <div className="flex flex-col">
          <h2 className="mt-3 mb-5 mx-2 text-2xl font-medium tracking-tight text-gray-900">
            Validador de CPF
          </h2>
          <div className="flex flex-col sm:flex-row mx-2">
            <div className="max-w-sm">
              <Input
                label="Validar CPF"
                placeholder="Ex: 11111111111"
                onChange={(e) => setIsValid(validCpf(e.target.value))}
                maxLength={14}
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
          <InfoCpf />
        </div>
      </SideMenu>
    </>
  )
}

export default Cpf
