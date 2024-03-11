'use client'

import { getCurrentHour } from '@/utils/pickCurrentHour'
import { useState } from 'react'
import { FinalizationButton } from '../finalizacao/finalizationButton'

const scripts = [
  {
    title: 'Saudação inicial',
    message:
      'Olá, HOUR!\nMe chamo *NAME*, sou do suporte técnico da WSNET, como posso te ajudar?'
  },
  {
    title: 'Saudação cliente transferido',
    message:
      'HOUR, meu nome é *NAME*, sou especialista nesse assunto e por isso vou dar continuidade ao seu atendimento.'
  }
]

const formatMessage = (message: string, name: string) => {
  const currentHour = getCurrentHour()

  message = message.replace(/HOUR/g, currentHour)
  message = message.replace(/NAME/g, name)

  return message
}

export default function Manutencao() {
  const [name, setName] = useState('')

  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col gap-3">
      <input placeholder="Seu nome" onChange={(e) => setName(e.target.value)} />

      {scripts.map((item) => {
        const formatedMessage = formatMessage(item.message, name)

        return (
          <FinalizationButton
            key={item.title}
            title={item.title}
            message={formatedMessage}
          />
        )
      })}
    </div>
  )
}
