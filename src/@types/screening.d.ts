export type Triagem = {
  gerenciador: string
  olt: string
  onu: string
  modeloOnu: string
  situacaoOnu: boolean
  coletivo: boolean
  nomeColetivo: string
  alarme: string
  alarmeDate?: string
  alarmeHour?: string
  segundoAlarme?: boolean
  alarme2?: string
  alarme2Date?: string
  alarme2Hour?: string
  lineQuality?: string
  slot: string
  pon: string
  id: string
  envio?: string
  retorno?: string
  tx?: string
  cabo?: string
  situacaoPppoe: boolean
  acessoRemoto: boolean
  marcaModelo?: string
  pontoAdicional: boolean
  acessoRemoto2?: boolean
  marcaModeloPontoAdicional?: string
  mesh?: boolean
  meshQuantity?: string
  meshType?: string
  terceiroPonto?: boolean
  acessoRemoto3?: boolean
  marcaModeloTerceiroPonto?: string
  quedas: string
  defeito: string
  quedaMassiva: boolean
  clientesAfetados: string
}

export type TrocaDeSenha = {
  ponto: string
  senhaAntiga: string
  senhaNova: string
  trocaDeNome: string
  nomeAntigo?: string
  nomeNovo?: string
  senhaAntigaPontoAdicional?: string
  senhaNovaPontoAdicional?: string
  trocaDeNomePontoAdicional?: string
  nomeAntigoPontoAdicional?: string
  nomeNovoPontoAdicional?: string
}

export type ConfigRoteador = {
  ponto: string
  marca: string
  modelo: string
  mac: string
  serial: string
  pppoe: string
  senhaPppoe: string
  ssid2g: string
  senha2g: string
  ssid5g: string
  senha5g: string
  portaAcessoRemoto: string
  senhaAcessoRemoto: string
  ipBase: string
  portasLiberadas?: string
}

export type Rompimento = {
  gerenciador: string
  olt: string
  slot: string
  pon: string
  id: string
}

export type Manutencao = {
  canal: string
  gerenciador: string
  olt: string
  slot: string
  pon: string
}
