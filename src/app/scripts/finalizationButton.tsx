import { copyToClipboard } from '@/utils/copyToClipboard'
import toast from 'react-hot-toast'

type FinalizationButtonProps = {
  title: string
  message: string
}

export const FinalizationButton = ({
  title,
  message
}: FinalizationButtonProps) => {
  const copyMessage = (message: string) => {
    copyToClipboard(message)

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
  }

  return (
    <button
      className="rounded-lg bg-gray-800/50 p-4 font-bold uppercase text-gray-300 hover:bg-gray-700/50"
      onClick={() => copyMessage(message)}
    >
      {title}
    </button>
  )
}
