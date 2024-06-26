import { Cog6ToothIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

import { InfoCpf } from '../../../components/info/InfoCpf'
import { Metadata } from '../../../components/Metadata'
import { Button } from '../../../components/primitives/Button'
import { Input } from '../../../components/primitives/Input'
import SideMenu from '../../../components/SideMenu'
import { genCpf } from '../../../utils/helpers'

const Cpf = () => {
  const [cpf, setCpf] = useState('')
  const [pointing, setPointing] = useState(false)

  return (
    <>
      <Metadata
        title="Gerador de CPF"
        description="Ferramenta online para gerar CPF válidos! Nosso gerador de CPF ainda tem a opção de gerar com pontos e sem os pontos entre os números."
        canonical="/helpers/generator/cpf"
      />
      <SideMenu section="generator" helper="cpf">
        <div className="flex flex-col">
          <h2 className="mt-3 mb-5 mx-2 text-2xl font-medium tracking-tight text-gray-900">
            Gerador de CPF
          </h2>
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
                setCpf('')
                return setPointing(!pointing)
              }}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Pontuação?
            </label>
          </div>
          <InfoCpf />
        </div>
      </SideMenu>
    </>
  )
}

export default Cpf
