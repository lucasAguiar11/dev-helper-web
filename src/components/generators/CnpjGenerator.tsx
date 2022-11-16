import { Cog6ToothIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

import { genCnpj } from '../../utils/helpers'
import { Button } from '../primitives/Button'
import { Input } from '../primitives/Input'
import { InfoCnpj } from '../info/InfoCnpj'

export const CnpjGenerator = () => {
  const [cnpj, setCnpj] = useState('')
  const [pointing, setPointing] = useState(false)
  return (
    <div className="flex flex-col  mt-5">
      <div className="flex flex-row mx-2">
        <div className="max-w-sm">
          <Input label="Novo CNPJ" readOnly placeholder="Ex: 11111111111111" value={cnpj} />
        </div>
        <div className="min-w-[130px] pt-7 pl-2">
          <Button
            label="Gerar"
            onClick={() => setCnpj(genCnpj(pointing))}
            icon={
              <Cog6ToothIcon
                className="h-5 w-5 text-gray-50/60 group-hover:text-white/25"
                aria-hidden="true"
              />
            }
          />
        </div>
      </div>
      <div className="flex jus items-center pl-2 pt-3">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          checked={pointing}
          onChange={() => {
            setCnpj('')
            return setPointing(!pointing)
          }}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
          Pontuação?
        </label>
      </div>
      <InfoCnpj />
    </div>
  )
}
