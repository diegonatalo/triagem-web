import { ConfigRoteador } from '@/@types/screening'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function ConfigRoteador() {
  const { register, handleSubmit, reset } = useForm<ConfigRoteador>()

  const onSubmit = handleSubmit((data) => {
    const triagemFormatada = generateConfigRoteador(data)

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
        <input
          placeholder="Senha antiga"
          required
          {...register('senhaAntiga')}
        />

        <input placeholder="Senha nova" required {...register('senhaNova')} />
      </div>
    </form>
  )
}
