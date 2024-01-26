import { Screening, TrocaDeSenha } from '@/@types/screening'

export const generateScreening = (data: Screening) => {
  let screening = ''

  screening += '-> Gerenciador: ' + data.gerenciador + '\n'
  screening += '-> OLT: ' + data.olt + '\n'
  screening +=
    '-> ' + data.onu + ' - ' + data.modeloOnu + ': ' + data.situacaoOnu + '\n'

  if (data.coletivo === 'Sim') {
    screening +=
      '-> Coletivo: ' + data.coletivo + ' / ' + data.nomeColetivo + '\n'
  } else {
    screening += '-> Coletivo: ' + data.coletivo + '\n'
  }

  if (data.situacaoOnu === 'Ativa') {
    screening +=
      '-> Alarm History: ' +
      data.alarme +
      ' | ' +
      data.alarmeDate +
      ' - ' +
      data.alarmeHour +
      '\n'
  } else {
    screening += '-> Alarme constatado: ' + data.alarme + '\n'
  }

  if (data.gerenciador === 'U2000') {
    screening += '-> LineQuality: ' + data.lineQuality + '\n'
  }

  screening +=
    '-> Slot: ' + data.slot + '  PON: ' + data.pon + '  Id: ' + data.id + '\n'

  if (data.situacaoOnu === 'Ativa') {
    screening +=
      '-> Sinal de envio: -' +
      data.envio +
      'dBm  Retorno: -' +
      data.retorno +
      'dBm  Tx: ' +
      data.tx +
      'dBm' +
      '\n'
    screening += '-> Cabo: ' + data.cabo + '\n'
  }

  if (data.situacaoPppoe === 'Ativo') {
    screening +=
      '-> PPPoE: ' +
      data.situacaoPppoe +
      ' ' +
      data.acessoRemoto +
      ' / ' +
      data.marcaModelo +
      '\n'
  } else {
    screening += '-> PPPoE: ' + data.situacaoPppoe + '\n'
  }

  if (data.pontoAdicional === 'Sim') {
    screening +=
      '-> Segundo ponto: ' +
      data.pontoAdicional +
      ' ' +
      data.acessoRemoto2 +
      ' / ' +
      data.marcaModeloPontoAdicional +
      '\n'
  } else {
    screening += '-> Segundo ponto: ' + data.pontoAdicional + '\n'
  }

  screening +=
    '-> Extrato de conexão: ' + data.quedas + ' Quedas constatadas' + '\n\n'
  screening += 'Defeito reclamado: ' + data.defeito

  return screening
}

export const generateTrocaDeSenha = (data: TrocaDeSenha) => {
  let trocaDeSenha = ''

  trocaDeSenha += data.senhaAntiga

  return trocaDeSenha
}
