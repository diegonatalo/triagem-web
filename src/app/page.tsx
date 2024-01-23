'use client'

import { Screening } from '@/@types/screening'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { generateScreening } from '@/utils/generateScreening'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

export default function Home() {
  const { register, handleSubmit, reset, watch } = useForm<Screening>()

  const onSubmit = handleSubmit((data) => {
    const triagemFormatada = generateScreening(data)

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

  const pontoAdicional = watch('pontoAdicional')

  return (
    <main className="mx-auto flex w-full max-w-[600px] flex-col justify-center p-8">
      <form
        className="flex w-full flex-col gap-3"
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <div className="flex w-full gap-3">
          <input placeholder="Nome" required {...register('nome')} />

          <input
            placeholder="Telefone"
            required
            {...register('telefone')}
            aria-autocomplete="none"
          />
        </div>

        <div className="flex w-full gap-4">
          <select required {...register('gerenciador')}>
            <option value="">Gerenciador</option>
            <option value="U2000">U2000</option>
            <option value="UNM2000">UNM2000</option>
          </select>

          <select required {...register('olt')}>
            <option value="">OLT</option>
            <option value="ITA Centro">ITA Centro</option>
            <option value="ITA Savoy">ITA Savoy</option>
            <option value="ITA Umuarama">ITA Umuarama</option>
            <option value="PRB Vila Erminda">PRB Vila Erminda</option>
            <option value="PRB Três Marias">PRB Três Marias</option>
            <option value="PRB Caraguava">PRB Caraguava</option>
            <option value="MONG Agenor">MONG Agenor</option>
            <option value="MONG Vera Cruz">MONG Vera Cruz</option>
          </select>
        </div>

        <div className="flex w-full gap-3">
          <select required {...register('onu')}>
            <option value="ONU">ONU</option>
            <option value="ONT">ONT</option>
          </select>

          <select required {...register('modeloOnu')}>
            <option value="Huawei">Huawei</option>
            <option value="Fiberhome">Fiberhome</option>
          </select>

          <select required {...register('situacaoOnu')}>
            <option value="">Sit. ONU/ONT</option>
            <option value="Ativa">Ativa</option>
            <option value="Inativa">Inativa</option>
          </select>
        </div>

        <div className="flex w-full gap-3">
          <select required {...register('coletivo')}>
            <option value="">Coletivo</option>
            <option value="Não">Não</option>
            <option value="Sim">Sim</option>
          </select>

          <select required {...register('lineQuality')}>
            <option value="">Line Quality</option>
            <option value="Sem erros">Sem erros</option>
            <option value="Alarmando -> Zerado">Alarmando {'->'} Zerado</option>
          </select>
        </div>

        <div className="flex w-full gap-3">
          <select required {...register('alarme')}>
            <option value="">Alarme</option>
            <option value="Link Loss (COD 1)">Link Loss</option>
            <option value="Dying Gasp (COD 2)">Dying Gasp</option>
            <option value="SUF (COD 3)">SUF</option>
            <option value="DownBip BipUp (COD 4)">DownBip BipUp</option>
          </select>

          <input placeholder="Data" required {...register('alarmeDate')} />

          <input placeholder="Hora" required {...register('alarmeHour')} />
        </div>

        <div className="flex w-full gap-3">
          <input placeholder="Slot" required {...register('slot')} />

          <input placeholder="PON" required {...register('pon')} />

          <input placeholder="ID" required {...register('id')} />
        </div>

        <div className="flex w-full gap-3">
          <input placeholder="Envio" required {...register('envio')} />

          <input placeholder="Retorno" required {...register('retorno')} />

          <input placeholder="TX" required {...register('tx')} />

          <select required {...register('cabo')}>
            <option value="">Cabo</option>
            <option value="100Mbps">100Mbps</option>
            <option value="1000Mbps">1000Mbps</option>
            <option value="LAN off">LAN off</option>
          </select>
        </div>

        <div className="flex w-full gap-3">
          <select required {...register('situacaoPppoe')}>
            <option value="">Sit. PPPoE</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>

          <input
            placeholder="Marca/Modelo"
            required
            {...register('marcaModelo')}
          />
        </div>

        <div className="flex w-full gap-3">
          <select required {...register('pontoAdicional')}>
            <option value="">Segundo Ponto</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>

          {pontoAdicional === 'Sim' && (
            <input
              placeholder="Marca/Modelo"
              {...register('marcaModeloPontoAdicional')}
            />
          )}
        </div>

        <div className="flex w-full gap-3">
          <input
            placeholder="Quantidade de Quedas"
            required
            {...register('quedas')}
          />

          <input
            placeholder="Defeito Reclamado"
            required
            {...register('defeito')}
          />
        </div>

        <div className="flex w-full">
          <button
            className="w-full rounded-lg bg-sky-500/80 p-4 text-lg font-bold text-gray-100 opacity-80 hover:opacity-100"
            type="submit"
          >
            Gerar Triagem
          </button>
        </div>
      </form>

      <Toaster position="bottom-center" />
    </main>
  )
}
