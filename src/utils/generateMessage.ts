import {
  ConfigRoteador,
  Manutencao,
  Rompimento,
  Triagem,
  TrocaDeSenha
} from '@/@types/screening'

export const generateScreening = (data: Triagem) => {
  let screening = ''

  screening += '> Gerenciador: ' + data.gerenciador + '\n'
  screening += '> OLT: ' + data.olt + '\n'
  screening += '> ' + data.onu + ' - ' + data.modeloOnu + ': '

  if (data.situacaoOnu) {
    screening += 'Ativa\n'
  } else {
    screening += 'Inativa\n'
  }

  if (data.coletivo) {
    screening += '> Coletivo: Sim / ' + data.nomeColetivo + '\n'
  } else {
    screening += '> Coletivo: Não\n'
  }

  if (data.situacaoOnu) {
    screening += '> Alarm History: ' + data.alarme
  } else {
    screening += '> Alarme constatado: ' + data.alarme
  }

  if (data.alarmeDate) {
    screening += ' | ' + data.alarmeDate + ' - ' + data.alarmeHour + '\n'
  } else {
    screening += '\n'
  }

  if (data.gerenciador === 'U2000') {
    screening += '> LineQuality: ' + data.lineQuality + '\n'
  }

  screening +=
    '> Slot: ' + data.slot + '  PON: ' + data.pon + '  Id: ' + data.id + '\n'

  if (data.situacaoOnu) {
    screening +=
      '> Sinal de envio: -' +
      data.envio +
      'dBm  Retorno: -' +
      data.retorno +
      'dBm  Tx: ' +
      data.tx +
      'dBm' +
      '\n'
    screening += '> Cabo: ' + data.cabo + '\n'
  }

  if (data.situacaoPppoe) {
    screening += '> PPPoE: Ativo '

    if (data.acessoRemoto) {
      screening += '+ Acesso remoto / '
    } else {
      screening += '/ Sem acesso remoto / '
    }

    screening += data.marcaModelo + '\n'
  } else {
    screening += '> PPPoE: Inativo\n'
  }

  if (data.pontoAdicional) {
    screening += '> Segundo ponto: Sim '

    if (data.mesh) {
      screening +=
        '/ ' +
        data.meshQuantity +
        ' roteadores em Mesh / ' +
        data.meshType +
        '\n'
    } else {
      if (data.acessoRemoto2) {
        screening += '+ Acesso remoto / '
      } else {
        screening += '/ Sem acesso remoto / '
      }

      screening += data.marcaModeloPontoAdicional + '\n'
    }
  } else {
    screening += '> Segundo ponto: Não\n'
  }

  screening +=
    '> Extrato de conexão: ' +
    data.quedas +
    ' quedas constatadas nos últimos 30 dias' +
    '\n\n'
  screening += 'Defeito reclamado: ' + data.defeito + '\n\n'

  if (data.quedaMassiva) {
    screening += 'Verificado demais clientes inativos no mesmo horário:\n'

    screening += data.clientesAfetados
  }

  return screening
}

export const generateTrocaDeSenha = (data: TrocaDeSenha) => {
  let mensagem = ''

  mensagem +=
    '- Cliente entrou em contato solicitando troca de senha.\n- Dados confirmados\n\n'

  if (data.ponto === '1° e 2° ponto') {
    mensagem += '1° Ponto:\n'
  }

  if (data.trocaDeNome === 'Sim') {
    mensagem += '- Nome antigo: ' + data.nomeAntigo + '\n'
    mensagem += '- Nome novo: ' + data.nomeNovo + '\n'
  }

  mensagem += '- Senha antiga: ' + data.senhaAntiga + '\n'
  mensagem += '- Senha nova: ' + data.senhaNova + '\n\n'

  if (data.ponto === '1° e 2° ponto') {
    mensagem += '2° Ponto:\n'

    if (data.trocaDeNomePontoAdicional === 'Sim') {
      mensagem += '- Nome antigo: ' + data.nomeAntigoPontoAdicional + '\n'
      mensagem += '- Nome novo: ' + data.nomeNovoPontoAdicional + '\n'
    }

    mensagem += '- Senha antiga: ' + data.senhaAntigaPontoAdicional + '\n'
    mensagem += '- Senha nova: ' + data.senhaNovaPontoAdicional + '\n\n'
  }

  mensagem += '- Cliente confirmou conexão.\n'
  mensagem += '- Protocolo enviado.\n'
  mensagem += '- Atendimento finalizado.'

  return mensagem
}

export const generateConfigRoteador = (data: ConfigRoteador) => {
  let mensagem = ''

  mensagem += 1

  return mensagem
}

export const generateRompimento = (data: Rompimento) => {
  let message =
    '- Cliente afetado pelo rompimento\n- ONU alarmando Link Loss\n- Protocolo informado\n'

  message += '- Gerenciador: ' + data.gerenciador + '\n'
  message += '- OLT: ' + data.olt + '\n'
  message += '- Slot: ' + data.slot
  message += '  /  PON: ' + data.pon
  message += '  /  Id: ' + data.id

  return message
}

export const generateManutencao = (data: Manutencao) => {
  let message = '- Cliente ciente da manutenção em sua região.\n'

  message += '- Gerenciador: ' + data.gerenciador + '\n'
  message += '- OLT: ' + data.olt + '\n'
  message += '- Slot: ' + data.slot
  message += '  /  PON: ' + data.pon + '\n'
  message += '- Ciente de seu atendimento em monitoramento.\n'

  if (data.canal === 'Smart') {
    message += '- Protocolo informado.'
  } else {
    message += '- Protocolo enviado por sms.'
  }

  return message
}
