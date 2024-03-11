'use client'

import { Triagem } from '@/@types/screening'
import { Button } from '@/components/button'
import { RadixToggle } from '@/components/toggle'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { generateScreening } from '@/utils/generateMessage'
import { ChangeEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Home() {
  const { register, handleSubmit, reset, watch, control } = useForm<Triagem>()

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
    setDate('')
    setTime('')
    setTimeout(() => location.reload(), 2000)
  })

  const gerenciador = watch('gerenciador', 'U2000')
  const status = watch('situacaoOnu', true)
  const coletivo = watch('coletivo', false)
  const alarme = watch('alarme')
  const pppoe = watch('situacaoPppoe', true)
  const pontoAdicional = watch('pontoAdicional', false)
  const quedaMassiva = watch('quedaMassiva', false)

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
      className="mx-auto flex w-full max-w-[600px] flex-col gap-3"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <div className="flex w-full gap-3">
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

        <Controller
          control={control}
          name="situacaoOnu"
          defaultValue={true}
          render={({ field }) => {
            return (
              <RadixToggle
                title="Status"
                onPressChange={field.onChange}
                {...field}
              />
            )
          }}
        ></Controller>
      </div>

      <div className="flex w-full gap-3">
        <Controller
          control={control}
          name="coletivo"
          defaultValue={false}
          render={({ field }) => {
            return (
              <RadixToggle
                title="Coletivo"
                defaultPressed={false}
                onPressChange={field.onChange}
                {...field}
              />
            )
          }}
        ></Controller>

        {coletivo && (
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

      {status && (
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
        <Controller
          control={control}
          name="situacaoPppoe"
          defaultValue={true}
          render={({ field }) => {
            return (
              <RadixToggle
                title="PPPoE"
                onPressChange={field.onChange}
                {...field}
              />
            )
          }}
        ></Controller>

        {pppoe && (
          <>
            <Controller
              control={control}
              name="acessoRemoto"
              defaultValue={true}
              render={({ field }) => {
                return (
                  <RadixToggle
                    title="Acesso remoto"
                    onPressChange={field.onChange}
                    {...field}
                  />
                )
              }}
            ></Controller>

            <input
              list="modelsList"
              placeholder="Marca/Modelo"
              required
              {...register('marcaModelo')}
            />
          </>
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
        <Controller
          control={control}
          name="pontoAdicional"
          defaultValue={false}
          render={({ field }) => {
            return (
              <RadixToggle
                title="Segundo ponto"
                defaultPressed={false}
                onPressChange={field.onChange}
                {...field}
              />
            )
          }}
        ></Controller>

        {pontoAdicional && (
          <>
            <Controller
              control={control}
              name="acessoRemoto2"
              defaultValue={true}
              render={({ field }) => {
                return (
                  <RadixToggle
                    title="Acesso remoto"
                    onPressChange={field.onChange}
                    {...field}
                  />
                )
              }}
            ></Controller>

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
        <Controller
          control={control}
          name="quedaMassiva"
          defaultValue={false}
          render={({ field }) => {
            return (
              <RadixToggle
                title="Problema massivo"
                defaultPressed={false}
                onPressChange={field.onChange}
                {...field}
              />
            )
          }}
        ></Controller>
      </div>

      {quedaMassiva && (
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
