import { Cog6ToothIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

import { genCnpj } from '../../lib/helpers'
import { Button } from '../primitives/Button'
import { Input } from '../primitives/Input'

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
                className="h-5 w-5 text-gray-50/30 group-hover:text-white/25"
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
      <div className="flex flex-col sm:flex-row pt-6">
        <div className="flex flex-col px-2 sm:px-5">
          <h1 className="text-xl text-gray-700">O que é?</h1>
          <p className="pt-2 text-sm text-gray-600 text-justify">
            O Cadastro Nacional de Pessoas Jurídicas (CNPJ) é o número designado pela Receita
            Federal na abertura da empresa. Ele serve para identificar o negócio nos mais diversos
            tipos de atividades, como a emissão de notas fiscais ou o pagamento dos impostos.
          </p>
        </div>
        <div className="flex flex-col px-2 pt-6 sm:px-5 sm:pt-0">
          <h1 className="text-xl text-gray-700">Identificação</h1>
          <p className="p-2 text-sm text-gray-600 text-justify">
            O Cadastro mantido pela Receita Federal vai lhe entregar 14 dígitos para serem sua
            identificação empresarial. O modelo do número segue este padrão: XX.XXX.XXX/0001-XX. O
            número do CNPJ pode ser dividido em blocos: a inscrição, que são os primeiros 8 dígitos,
            a parte que representa se é matriz ou filial (0001 – matriz, ou 0002 – filial), e
            finalmente dois dígitos verificadores.
          </p>
        </div>
      </div>
    </div>
  )
}
