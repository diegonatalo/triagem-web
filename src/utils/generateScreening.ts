import { Screening } from '@/@types/screening'

export const generateScreening = (data: Screening) => {
  return (
    'Nome: ' +
    data.nome +
    '\nTelefone: ' +
    data.telefone +
    '\n\n-- Gerenciador: ' +
    data.gerenciador +
    '\n-- OLT: ' +
    data.olt +
    '\n-- ' +
    data.onu +
    ' - ' +
    data.modeloOnu +
    ': ' +
    data.situacaoOnu +
    '\n-- Coletivo: ' +
    data.coletivo +
    '\n-- Alarme: ' +
    data.alarme +
    ' ' +
    data.alarmeDate +
    ' - ' +
    data.alarmeHour +
    '\n-- LineQuality: ' +
    data.lineQuality +
    '\n-- Slot: ' +
    data.slot +
    '     PON: ' +
    data.pon +
    '     ID: ' +
    data.pon +
    '\n-- Sinal de envio: -' +
    data.envio +
    'dBm     Retorno: -' +
    data.retorno +
    'dBm     TX: ' +
    data.tx +
    'dBm' +
    '\n-- Cabo: ' +
    data.cabo +
    'Mbps' +
    '\n-- PPPoE ' +
    data.situacaoPppoe +
    ': (' +
    data.marcaModelo +
    ')' +
    '\n-- Segundo ponto: ' +
    data.pontoAdicional +
    ' (' +
    data.marcaModeloPontoAdicional +
    ')' +
    '\n-- Extrato de conexão: ' +
    data.quedas +
    ' Quedas constatadas' +
    '\n\nDefeito reclamado: ' +
    data.defeito
  )
}
