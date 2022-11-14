export const InfoCnpj = () => {
  return (
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
  )
}
