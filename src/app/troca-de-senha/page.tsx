'use client'

import { TrocaDeSenha } from '@/@types/screening'
import { Button } from '@/components/button'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { generateTrocaDeSenha } from '@/utils/generateMessage'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function TrocaDeSenha() {
  const { register, handleSubmit, reset, watch } = useForm<TrocaDeSenha>()

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

  const ponto = watch('trocaDeNome') || '1° ponto'
  const trocarNome = watch('trocaDeNome') || 'Não'
  const trocarNomePontoAdicional = watch('trocaDeNomePontoAdicional') || 'Não'

  return (
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <div className="flex w-full gap-4">
        <input placeholder="Nome" required {...register('nome')} />

        <input placeholder="Telefone" required {...register('telefone')} />
      </div>

      <div className="flex w-full gap-4">
        <select required {...register('canal')}>
          <option value="ligação">Ligação</option>
          <option value="smart">Smart</option>
        </select>

        <select required {...register('ponto')}>
          <option value="1° ponto">1° ponto</option>
          <option value="2° ponto">2° ponto</option>
          <option value="1º e 2º ponto">1º e 2° ponto</option>
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

      {trocarNome === 'Sim' && (
        <div className="flex w-full gap-4">
          <input
            placeholder="Nome antigo"
            required
            {...register('nomeAntigo')}
          />

          <input placeholder="Nome novo" required {...register('nomeNovo')} />
        </div>
      )}

      {ponto === '1° e 2° ponto' && (
        <>
          <div className="flex w-full gap-4">
            <input
              placeholder="Senha antiga"
              required
              {...register('senhaAntigaPontoAdicional')}
            />

            <input
              placeholder="Senha nova"
              required
              {...register('senhaNovaPontoAdicional')}
            />
          </div>

          <div className="flex w-full gap-4">
            <select required {...register('trocaDeNomePontoAdicional')}>
              <option value="Não">❌ Troca de nome</option>
              <option value="Sim">✅ Troca de nome</option>
            </select>
          </div>

          {trocarNomePontoAdicional === 'Sim' && (
            <div className="flex w-full gap-4">
              <input
                placeholder="Nome antigo"
                required
                {...register('nomeAntigoPontoAdicional')}
              />

              <input
                placeholder="Nome novo"
                required
                {...register('nomeNovoPontoAdicional')}
              />
            </div>
          )}
        </>
      )}

      <Button />
    </form>
  )
}
