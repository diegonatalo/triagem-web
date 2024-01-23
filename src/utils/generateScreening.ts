import { Screening } from '@/@types/screening'

export const generateScreening = (data: Screening) => {
  if (data.marcaModeloPontoAdicional === undefined) {
    data.marcaModeloPontoAdicional = ''
  }

  return (
    '-> Gerenciador: ' +
    data.gerenciador +
    '\n-> OLT: ' +
    data.olt +
    '\n-> ' +
    data.onu +
    ' - ' +
    data.modeloOnu +
    ': ' +
    data.situacaoOnu +
    '\n-> Coletivo: ' +
    data.coletivo +
    '\n-> Alarm History: ' +
    data.alarme +
    ' | ' +
    data.alarmeDate +
    ' - ' +
    data.alarmeHour +
    '\n-> LineQuality: ' +
    data.lineQuality +
    '\n-> Slot: ' +
    data.slot +
    '  PON: ' +
    data.pon +
    '  Id: ' +
    data.id +
    '\n-> Sinal de envio: -' +
    data.envio +
    'dBm  Retorno: -' +
    data.retorno +
    'dBm  Tx: ' +
    data.tx +
    'dBm' +
    '\n-> Cabo: ' +
    data.cabo +
    '\n-> PPPoE: ' +
    data.situacaoPppoe +
    ' ' +
    data.acessoRemoto +
    ' / ' +
    data.marcaModelo +
    '\n-> Segundo ponto: ' +
    data.pontoAdicional +
    ' ' +
    data.acessoRemoto2 +
    ' / ' +
    data.marcaModeloPontoAdicional +
    '\n-> Extrato de conexão: ' +
    data.quedas +
    ' Quedas constatadas' +
    '\n\nDefeito reclamado: ' +
    data.defeito
  )
}
