'use client'

import { Manutencao } from '@/@types/screening'
import { Button } from '@/components/button'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { generateManutencao } from '@/utils/generateMessage'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Manutencao() {
  const { register, handleSubmit, reset } = useForm<Manutencao>()

  const onSubmit = handleSubmit((data) => {
    const triagemFormatada = generateManutencao(data)

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
      className="mx-auto flex w-full max-w-[600px] flex-col gap-3"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <div className="flex w-full gap-4">
        <select required {...register('canal')}>
          <option value="ligação">Ligação</option>
          <option value="Smart">Smart</option>
        </select>

        <select required {...register('gerenciador')}>
          <option selected value="U2000">
            U2000
          </option>
          <option value="UNM2000">UNM2000</option>
        </select>

        <select required {...register('olt')}>
          <option value="">OLT</option>
          <option value="ITA Centro">ITA Centro</option>
          <option value="ITA Savoy">ITA Savoy</option>
          <option value="ITA Gaivota">ITA Gaivota</option>
          <option value="ITA Umuarama">ITA Umuarama</option>
          <option value="PRB Centro">PRB Centro</option>
          <option value="PRB Vila Erminda">PRB Vila Erminda</option>
          <option value="PRB Três Marias">PRB Três Marias</option>
          <option value="PRB Caraguava">PRB Caraguava</option>
          <option value="MONG Agenor">MONG Agenor</option>
          <option value="MONG Vera Cruz">MONG Vera Cruz</option>
        </select>
      </div>

      <div className="flex w-full gap-3">
        <input placeholder="Slot" required {...register('slot')} />

        <input placeholder="PON" required {...register('pon')} />
      </div>

      <Button />
    </form>
  )
}
