'use client'

import { copilot } from '@/utils/copilot'
import { WarningDiamond } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Guide() {
  const defaultClass =
    'rounded-2xl border-2 border-sky-500/50 p-4 text-sky-500 hover:bg-sky-900/50 flex-1 transition-colors uppercase font-bold'

  const [state, setState] = useState('nada')

  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col justify-between gap-10">
      <h1 className="flex items-center justify-center gap-2 text-lg font-bold text-yellow-500/70">
        <WarningDiamond size={24} weight="bold" />
        Em desenvolvimento
      </h1>

      <span className="whitespace-pre-line rounded-r-2xl rounded-tl-2xl bg-sky-900/50 p-4">
        {copilot[state].botMessage}
      </span>

      <div className="flex justify-center gap-3">
        {copilot[state].buttons.map((button) => (
          <button
            key={button.buttonValue}
            className={defaultClass}
            onClick={() => setState(button.buttonValue)}
          >
            {button.buttonTitle}
          </button>
        ))}
      </div>
    </div>
  )
}
