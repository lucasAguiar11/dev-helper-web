import { useState } from 'react'

import { Input } from '../primitives/Input'
import { InfoCpf } from '../info/InfoCpf'
import { validCpf } from '../../utils/helpers'

export const CpfValidator = () => {
  const [isValid, setIsValid] = useState(false)

  return (
    <div className="flex flex-col  mt-5">
      <div className="flex flex-row mx-2">
        <div className="max-w-sm">
          <Input
            label="Validar CPF"
            placeholder="Ex: 11111111111"
            onChange={(e) => setIsValid(validCpf(e.target.value))}
            maxLength={14}
          />
        </div>
        <div className="flex items-center">
          <span className="text-xl text-gray-500 pt-7 pl-3">Resultado:</span>
          {isValid ? (
            <span className="text-2xl text-green-500 pt-7 pl-2 font-medium">Valido! 👍</span>
          ) : (
            <span className="text-2xl text-red-500 pt-7 pl-2 font-medium">Inválido! 👎</span>
          )}
        </div>
      </div>
      <InfoCpf />
    </div>
  )
}
