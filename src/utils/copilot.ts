type CopilotChoice = {
  botMessage: string
  buttons: {
    buttonTitle: string
    buttonValue: string
  }[]
}

interface Copilot {
  [key: string]: CopilotChoice
}

export const copilot: Copilot = {
  nada: {
    botMessage: 'Qual problema o cliente está enfrentando?',
    buttons: [
      {
        buttonTitle: 'Lentidão',
        buttonValue: 'lentidao1'
      },
      {
        buttonTitle: 'Sem Conexão',
        buttonValue: 'semconexao1'
      },
      {
        buttonTitle: 'Oscilação',
        buttonValue: 'oscilacao1'
      }
    ]
  },
  lentidao1: {
    botMessage: 'O cliente está sendo afetado por um problema massivo?',
    buttons: [
      {
        buttonTitle: 'Sim, é um problema massivo',
        buttonValue: 'massivoSim'
      },
      {
        buttonTitle: 'Não, é um problema individual',
        buttonValue: 'lentidao2'
      }
    ]
  },
  semconexao1: {
    botMessage: 'O cliente está sendo afetado por um problema massivo?',
    buttons: [
      {
        buttonTitle: 'Sim, é um problema massivo',
        buttonValue: 'massivoSim'
      },
      {
        buttonTitle: 'Não, é um problema individual',
        buttonValue: 'semconexao2'
      }
    ]
  },
  oscilacao1: {
    botMessage: 'O cliente está sendo afetado por um problema massivo?',
    buttons: [
      {
        buttonTitle: 'Sim, é um problema massivo',
        buttonValue: 'massivoSim'
      },
      {
        buttonTitle: 'Não, é um problema individual',
        buttonValue: 'oscilacao2'
      }
    ]
  },
  semconexao2: {
    botMessage: 'O cliente está suspenso por débito?',
    buttons: [
      {
        buttonTitle: 'Sim',
        buttonValue: 'suspensoDebito'
      },
      {
        buttonTitle: 'Não',
        buttonValue: 'semconexao3'
      }
    ]
  },
  semconexao3: {
    botMessage: 'A ONU está inativa?',
    buttons: [
      {
        buttonTitle: 'Sim',
        buttonValue: 'semconexao4a'
      },
      {
        buttonTitle: 'Não',
        buttonValue: 'semconexao4b'
      }
    ]
  },
  semconexao4a: {
    botMessage:
      'Existe alguma luz acesa na ONU?\n\n(Verificar principalmente se é a LOSS)',
    buttons: [
      {
        buttonTitle: 'Sim',
        buttonValue: 'semconexao5a'
      },
      {
        buttonTitle: 'Não',
        buttonValue: 'semconexao5b'
      }
    ]
  },
  semconexao5a: {
    botMessage:
      'Solicite que o cliente verifique se os cabos estão bem encaixados e tente realizar um reset na ONU.\n\nA conexão retornou?',
    buttons: [
      {
        buttonTitle: 'Sim',
        buttonValue: 'finalizacao'
      },
      {
        buttonTitle: 'Não',
        buttonValue: 'geraros'
      }
    ]
  },
  finalizacao: {
    botMessage:
      'Agora basta pedir a avaliação do atendimento e enviar o protocolo pro cliente.\n\nBom trabalho!',
    buttons: [
      {
        buttonTitle: 'Voltar ao começo',
        buttonValue: 'nada'
      }
    ]
  },
  geraros: {
    botMessage:
      'Será necessário abrir uma ordem de serviço para esse cliente.\n\nNão esqueça de avisar do prazo de 48 horas corridas.',
    buttons: [
      {
        buttonTitle: 'Voltar ao começo',
        buttonValue: 'nada'
      }
    ]
  }
}
