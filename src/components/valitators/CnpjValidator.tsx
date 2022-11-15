import { useState } from 'react'

import { Input } from '../primitives/Input'
import { InfoCnpj } from '../info/InfoCnpj'
import { validCnpj } from '../../utils/helpers'

export const CnpjValidator = () => {
  const [isValid, setIsValid] = useState(false)

  return (
    <div className="flex flex-col mt-5">
      <div className="flex flex-col sm:flex-row mx-2">
        <div className="max-w-sm">
          <Input
            label="Validar CNPJ"
            placeholder="Ex: 11111111111111"
            onChange={(e) => setIsValid(validCnpj(e.target.value))}
            maxLength={18}
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
  )
}
