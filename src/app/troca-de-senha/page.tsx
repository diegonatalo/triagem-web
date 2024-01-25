'use client'

import { TrocaDeSenha } from '@/@types/screening'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { generateTrocaDeSenha } from '@/utils/generateScreening'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function TrocaDeSenha() {
  const { register, handleSubmit, reset } = useForm<TrocaDeSenha>()

  const onSubmit = handleSubmit((data) => {
    const triagemFormatada = generateTrocaDeSenha(data)

    copyToClipboard(triagemFormatada)

    toast.success('Copiado para a área de transferência!', {
      style: {
        background: '#10b981',
        color: '#f9fafb'
      },
      iconTheme: {
        primary: '#f9fafb',
        secondary: '#10b981'
      }
    })

    reset()
  })

  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <div className="w-full bg-gray-800 p-4 opacity-70">
          <p>
            Me informe a senha que deseja colocar. A senha deve ter no mínimo *
            8 caracteres e não deve conter espaços ou acentos
            <br />* 🛑 * ATENÇÃO * 🛑 * Após a troca de senha será necessário
            reconectar todos os dispositivos com a nova senha. *
          </p>
        </div>
      </div>
      <form
        className="flex w-full flex-col gap-3"
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <div className="flex w-full gap-4">
          <input
            placeholder="Senha antiga"
            required
            {...register('senhaAntiga')}
          />

          <input placeholder="Senha nova" required {...register('senhaNova')} />
        </div>
      </form>
    </>
  )
}
