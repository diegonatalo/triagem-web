'use client'

import { Triagem } from '@/@types/screening'
import { Button } from '@/components/button'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { generateScreening } from '@/utils/generateMessage'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Home() {
  const { register, handleSubmit, reset, watch } = useForm<Triagem>()

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

  const gerenciador = watch('gerenciador') || 'U2000'
  const status = watch('situacaoOnu') || 'Ativa'
  const coletivo = watch('coletivo') || 'Não'
  const alarme = watch('alarme')
  const pppoe = watch('situacaoPppoe') || 'Ativo'
  const acessoRemoto = watch('acessoRemoto') || '+ Acesso Remoto'
  const pontoAdicional = watch('pontoAdicional') || 'Não'
  const quedaMassiva = watch('quedaMassiva') || 'Não'

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '')
    if (inputValue.length <= 2) {
      setDate(inputValue)
    } else if (inputValue.length <= 4) {
      setDate(inputValue.slice(0, 2) + '/' + inputValue.slice(2))
    } else {
      setDate(
        inputValue.slice(0, 2) +
          '/' +
          inputValue.slice(2, 4) +
          '/' +
          inputValue.slice(4, 6)
      )
    }
  }

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value.replace(/\D/g, '')
    if (inputValue.length <= 2) {
      setTime(inputValue)
    } else {
      setTime(inputValue.slice(0, 2) + ':' + inputValue.slice(2, 4))
    }
  }

  return (
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <div className="flex w-full gap-4">
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
        <select required {...register('onu')}>
          <option value="ONU">ONU</option>
          <option value="ONT">ONT (v2 / v5)</option>
        </select>

        <select required {...register('modeloOnu')}>
          <option value="Huawei">Huawei</option>
          <option value="Fiberhome">Fiberhome</option>
        </select>

        <select required {...register('situacaoOnu')}>
          <option selected value="Ativa">
            ✅ Ativa
          </option>
          <option value="Inativa">❌ Inativa</option>
        </select>
      </div>

      <div className="flex w-full gap-3">
        <select required {...register('coletivo')}>
          <option value="">Coletivo</option>
          <option value="Não">❌ Coletivo</option>
          <option value="Sim">✅ Coletivo</option>
        </select>

        {coletivo === 'Sim' && (
          <input
            placeholder="Nome do coletivo"
            required
            {...register('nomeColetivo')}
          />
        )}

        {gerenciador === 'U2000' && (
          <select required {...register('lineQuality')}>
            <option value="">Line Quality</option>
            <option value="Sem erros">Sem erros</option>
            <option value="Alarmando">Alarmando</option>
            <option value="Alarmando -> Zerado">Alarmando {'->'} Zerado</option>
          </select>
        )}
      </div>

      <div className="flex w-full gap-3">
        <select required {...register('alarme')}>
          <option value="">Alarme</option>
          <option value="Link Loss (COD 1)">Link Loss</option>
          <option value="Dying Gasp (COD 2)">Dying Gasp</option>
          <option value="SUF (COD 3)">SUF</option>
          <option value="Down Bip (COD 4)">Down Bip</option>
          <option value="Up Bip (COD 4)">Up Bip</option>
          <option value="Board Abort (COD 5)">Board Abort</option>
          <option value="Sem Alarme">Sem Alarme</option>
        </select>

        <input
          placeholder="Data"
          {...register('alarmeDate')}
          required={alarme !== 'Sem Alarme'}
          value={date}
          onChange={handleDateChange}
        />

        <input
          placeholder="Hora"
          {...register('alarmeHour')}
          required={alarme !== 'Sem Alarme'}
          value={time}
          onChange={handleTimeChange}
        />
      </div>

      <div className="flex w-full gap-3">
        <input placeholder="Slot" required {...register('slot')} />

        <input placeholder="PON" required {...register('pon')} />

        <input placeholder="ID" required {...register('id')} />
      </div>

      {status === 'Ativa' && (
        <div className="flex w-full gap-3">
          <input placeholder="Envio" required {...register('envio')} />

          <input placeholder="Retorno" required {...register('retorno')} />

          <input placeholder="Tx" required {...register('tx')} />

          <input
            list="caboList"
            placeholder="Cabo"
            required
            {...register('cabo')}
          />

          <datalist id="caboList">
            <option value="100Mbps"></option>
            <option value="1000Mbps"></option>
            <option value="LAN off"></option>
          </datalist>
        </div>
      )}

      <div className="flex w-full gap-3">
        <select required {...register('situacaoPppoe')}>
          <option value="Ativo">✅ PPPoE</option>
          <option value="Inativo">❌ PPPoE</option>
        </select>

        {pppoe === 'Ativo' && (
          <select required {...register('acessoRemoto')}>
            <option value="+ Acesso Remoto">✅ Acesso Remoto</option>
            <option value="(Sem Acesso Remoto)">❌ Acesso Remoto</option>
          </select>
        )}

        {pppoe === 'Ativo' && acessoRemoto === '+ Acesso Remoto' && (
          <input
            list="modelsList"
            placeholder="Marca/Modelo"
            required
            {...register('marcaModelo')}
          />
        )}

        <datalist id="modelsList">
          <option value="HUAWEI / AX2"></option>
          <option value="HUAWEI / WS5200"></option>
          <option value="HUAWEI / EG8145V5-V2"></option>
          <option value="TP-LINK / C5"></option>
          <option value="TP-LINK / G5"></option>
          <option value="TP-LINK / C20"></option>
          <option value="TP-LINK / WR840N"></option>
        </datalist>
      </div>

      <div className="flex w-full gap-3">
        <select required {...register('pontoAdicional')}>
          <option value="Não">❌ Segundo Ponto</option>
          <option value="Sim">✅ Segundo Ponto</option>
        </select>

        {pontoAdicional === 'Sim' && (
          <>
            <select required {...register('acessoRemoto2')}>
              <option value="+ Acesso Remoto">✅ Acesso Remoto</option>
              <option value="(Sem Acesso Remoto)">❌ Acesso Remoto</option>
            </select>

            <input
              list="modelsList"
              placeholder="Marca/Modelo"
              required
              {...register('marcaModeloPontoAdicional')}
            />
          </>
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
          list="defeito"
          required
          {...register('defeito')}
        />

        <datalist id="defeito">
          <option value="Lentidão"></option>
          <option value="Sem conexão"></option>
          <option value="Oscilação"></option>
        </datalist>
      </div>

      <div className="flex w-full gap-3">
        <select required {...register('quedaMassiva')}>
          <option value="Não">❌ Queda massiva</option>
          <option value="Sim">✅ Queda massiva</option>
        </select>
      </div>

      {quedaMassiva === 'Sim' && (
        <textarea
          placeholder="Clientes afetados"
          required
          {...register('clientesAfetados')}
        ></textarea>
      )}

      <div className="flex w-full">
        <Button />
      </div>
    </form>
  )
}
