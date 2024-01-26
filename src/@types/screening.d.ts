export type Screening = {
  gerenciador: string
  olt: string
  onu: string
  modeloOnu: string
  situacaoOnu: string
  coletivo: string
  nomeColetivo: string
  alarme: string
  alarmeDate?: string
  alarmeHour?: string
  lineQuality?: string
  slot: string
  pon: string
  id: string
  envio?: string
  retorno?: string
  tx?: string
  cabo?: string
  situacaoPppoe: string
  acessoRemoto: string
  marcaModelo?: string
  pontoAdicional: string
  acessoRemoto2?: string
  marcaModeloPontoAdicional?: string
  quedas: string
  defeito: string
}

export type TrocaDeSenha = {
  senhaAntiga: string
  senhaNova: string
  trocaDeNome: string
  nomeAntigo?: string
  nomeNovo?: string
  pontoAdicional: string
  senhaAntigaPontoAdicional?: string
  senhaNovaPontoAdicional?: string
  trocaDeNomePontoAdicional?: string
  nomeAntigoPontoAdicional?: string
  nomeNovoPontoAdicional?: string
}
