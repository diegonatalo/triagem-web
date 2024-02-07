'use client'

import { TrocaDeSenha } from '@/@types/screening'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { generateTrocaDeSenha } from '@/utils/generateMessage'
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
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <div className="flex w-full gap-4">
        <select required {...register('canal')}>
          <option>Origem do contato</option>
          <option value="ligação">Ligação</option>
          <option value="smart">Smart</option>
        </select>
      </div>

      <div className="flex w-full gap-4">
        <input
          placeholder="Senha antiga"
          required
          {...register('senhaAntiga')}
        />

        <input placeholder="Senha nova" required {...register('senhaNova')} />
      </div>

      <div className="flex w-full gap-4">
        <select required {...register('trocaDeNome')}>
          <option value="Não">❌ Troca de nome</option>
          <option value="Sim">✅ Troca de nome</option>
        </select>
      </div>

      <div className="flex w-full gap-4">
        <input placeholder="Nome antigo" required {...register('nomeAntigo')} />

        <input placeholder="Nome novo" required {...register('nomeNovo')} />
      </div>
    </form>
  )
}
