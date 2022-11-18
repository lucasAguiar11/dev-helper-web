import { useState } from 'react'
import { InfoCpf } from '../../../components/info/InfoCpf'
import { Input } from '../../../components/primitives/Input'
import SideMenu from '../../../components/SideMenu'
import { validCpf } from '../../../utils/helpers'

const Cpf = () => {
  const [isValid, setIsValid] = useState(false)

  return (
    <SideMenu section="validator" helper="cpf">
      <div className="flex flex-col  mt-5">
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
  )
}

export default Cpf
