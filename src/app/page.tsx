'use client'

import { Screening } from "@/@types/screening"
import { copyToClipboard } from "@/utils/copyToClipboard"
import { generateScreening } from "@/utils/generateScreening"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export default function Home() {
  const { register, handleSubmit, reset } = useForm<Screening>()

  const onSubmit = handleSubmit((data) => {
    const triagemFormatada = generateScreening(data)

    copyToClipboard(triagemFormatada)

    toast.success('Copiado para a área de transferência!', {
      style: {
        background: '#10b981',
        color: '#f9fafb',
      },
      iconTheme: {
        primary: '#f9fafb',
        secondary: '#10b981',
      },
    })

    reset() 
  })

  return (
    <main className="flex flex-col p-8 justify-center mx-auto w-full max-w-[600px]">
      <form className="flex flex-col gap-3 w-full" onSubmit={onSubmit} autoComplete="off">
        <div className="flex gap-3 w-full">
          <input placeholder="Nome" required {...register("nome")} />

          <input placeholder="Telefone" required {...register("telefone")} aria-autocomplete="none" />
        </div>

        <div className="flex gap-4 w-full">
          <select required {...register("gerenciador")}>
            <option value="">Gerenciador</option>
            <option value="U2000">U2000</option>
            <option value="UNM2000">UNM2000</option>
          </select>

          <select required {...register("olt")}>
            <option value="">OLT</option>
            <option value="Itanhaém">Itanhaém</option>
            <option value="Mongaguá">Mongaguá</option>
            <option value="Peruíbe">Peruíbe</option>
          </select>
        </div>

        <div className="flex gap-3 w-full">
          <select required {...register("onu")}>
            <option value="ONU">ONU</option>
            <option value="ONT">ONT</option>
          </select>

          <select required {...register("modeloOnu")}>
            <option value="Huawei">Huawei</option>
            <option value="Fiberhome">Fiberhome</option>
          </select>

          <select required {...register("situacaoOnu")}>
            <option value="">Sit. ONU/ONT</option>
            <option value="Ativa">Ativa</option>
            <option value="Inativa">Inativa</option>
          </select>
        </div>

        <div className="flex gap-3 w-full">
          <select required {...register("coletivo")}>
            <option value="">Coletivo</option>
            <option value="Não">Não</option>
            <option value="Sim">Sim</option>
          </select>

          <select required {...register("lineQuality")}>
            <option value="">Line Quality</option>
            <option value="Sem erros">Sem erros</option>
            <option value="Alarmando -> Zerado">Alarmando {'->'} Zerado</option>
          </select>
        </div>

        <div className="flex gap-3 w-full">
          <select required {...register("alarme")}>
            <option value="">Alarme</option>
            <option value="Link Loss (cod 1)">Link Loss</option>
            <option value="Dying Gasp (cod 2)">Dying Gasp</option>
            <option value="SUF (cod 3)">SUF</option>
            <option value="DownBip BipUp (cod 4)">DownBip BipUp</option>
          </select>

          <input placeholder="Data" required {...register("alarmeDate")} />

          <input placeholder="Hora" required {...register("alarmeHour")} />
        </div>

        <div className="flex gap-3 w-full">
          <input placeholder="Slot" required {...register("slot")} />

          <input placeholder="PON" required {...register("pon")} />

          <input placeholder="ID" required {...register("id")} />
        </div>

        <div className="flex gap-3 w-full">
          <input placeholder="Envio" required {...register("envio")} />

          <input placeholder="Retorno" required {...register("retorno")} />

          <input placeholder="TX" required {...register("tx")} />

          <input placeholder="Cabo" required {...register("cabo")} />
        </div>

        <div className="flex gap-3 w-full">
          <select required {...register("situacaoPppoe")}>
            <option value="">Sit. PPPoE</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>

          <input placeholder="Marca/Modelo" required {...register("marcaModelo")} />
        </div>

        <div className="flex gap-3 w-full">
          <select required {...register("pontoAdicional")}>
            <option value="">Segundo Ponto</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>

          <input placeholder="Marca/Modelo" {...register("marcaModeloPontoAdicional")} />
        </div>

        <div className="flex gap-3 w-full">
          <input placeholder="Quantidade de Quedas" required {...register("quedas")} />

          <input placeholder="Defeito Reclamado" required {...register("defeito")} />
        </div>

        <div className="flex w-full">
          <button 
            className="w-full p-4 rounded-lg hover:opacity-100 opacity-80 bg-sky-500/80 font-bold text-lg text-gray-100"
            type="submit"
          >
            Gerar Triagem
          </button>
        </div>
      </form>

      <Toaster position="bottom-center"/>
    </main>
  );
}
