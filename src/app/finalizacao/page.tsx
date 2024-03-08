'use client'

import { FinalizationButton } from './finalizationButton'

const atendimento = [
  {
    title: 'SEM CONEXÃO',
    message: 'Conexão restabelecida junto ao cliente'
  },
  {
    title: 'CONFIGURAÇÃO DE ROTEADOR',
    message: 'Configurado o roteador do cliente'
  },
  {
    title: 'LENTIDÃO',
    message: 'Solucionado problemas de lentidão junto ao cliente'
  },
  {
    title: 'OSCILAÇÃO',
    message: 'Solucionado problemas de oscilação junto ao cliente'
  },
  {
    title: 'TROCA DE SENHA',
    message: 'Feito a troca de senha como solicitado pelo cliente'
  },
  {
    title: 'VERIFICAÇÃO DE SENHA',
    message: 'Feito a verificação de senha como solicitado pelo cliente'
  },
  {
    title: 'SEM CONTATO',
    message: 'Atendimento encerrado devido a falta de contato com o cliente'
  },
  {
    title: 'DUPLICADO',
    message: 'Atendimento duplicado'
  },
  {
    title: 'OUTROS',
    message:
      'Verificado problema junto ao cliente. Devidas orientações informadas para solucionar o problema.'
  },
  {
    title: 'INATIVIDADE',
    message:
      'Atendimento finalizado pois cliente parou de interagir no WhatsApp.'
  },
  {
    title: 'TELEFONE',
    message: 'Solucionado problemas na linha telefônica da cliente.'
  },
  {
    title: 'ONU FORÇA TAREFA',
    message:
      'Atendimento realizado, verificado problema e passado orientações ao cliente'
  }
]

export default function Scripts() {
  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col gap-3">
      {atendimento.map((item) => (
        <FinalizationButton
          key={item.title}
          title={item.title}
          message={item.message}
        />
      ))}
    </div>
  )
}
