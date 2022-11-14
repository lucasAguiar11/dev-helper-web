import { Cog6ToothIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

import { genCpf } from '../../lib/helpers'
import { Button } from '../primitives/Button'
import { Input } from '../primitives/Input'

export const CpfGenerator = () => {
  const [cpf, setCpf] = useState('')
  const [pointing, setPointing] = useState(false)

  return (
    <div className="flex flex-col  mt-5">
      <div className="flex flex-row mx-2">
        <div className="max-w-sm">
          <Input label="Novo CPF" readOnly placeholder="Ex: 11111111111" value={cpf} />
        </div>
        <div className="min-w-[130px] pt-7 pl-2">
          <Button
            label="Gerar"
            onClick={() => setCpf(genCpf(pointing))}
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
            setCpf('')
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
            O CPF é o Cadastro de Pessoa Física. Ele é um documento feito pela Receita Federal e
            serve para identificar os contribuintes. O CPF é uma numeração com 11 dígitos, que só
            mudam por decisão judicial.
          </p>
        </div>
        <div className="flex flex-col px-2 pt-6 sm:px-5 sm:pt-0">
          <h1 className="text-xl text-gray-700">Identificar o Estado</h1>
          <p className="p-2 text-sm text-gray-600 text-justify">
            Uma forma de conferir o número do CPF é identificar o Estado em que foi emitido. Esse
            número corresponde ao ultimo algarismo anterior aos dois dígitos de controle. No exemplo
            CPF nº 000.000.008-00, o número 8 mostra que esse documento foi emitido no estado de São
            Paulo. Veja a tabela de códigos dos estados brasileiros:
          </p>
          <div className="text-sm text-gray-600">
            <p>0 - Rio Grande do Sul</p>
            <p>1 - Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins</p>
            <p>2 - Pará, Amazonas, Acre, Amapá, Rondônia e Roraima</p>
            <p>3 - Ceará, Maranhão e Piauí</p>
            <p>4 - Pernambuco, Rio Grande do Norte, Paraíba e Alagoas</p>
            <p>5 - Bahia e Sergipe</p>
            <p>6 - Minas Gerais</p>
            <p>7 - Rio de Janeiro e Espírito Santo</p>
            <p>8 - São Paulo</p>
            <p>9 - Paraná e Santa Catarina</p>
          </div>
        </div>
      </div>
    </div>
  )
}
