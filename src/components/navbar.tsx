import {
  Barricade,
  Faders,
  LockSimple,
  MagnifyingGlass,
  PlugsConnected,
  Scroll
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <aside className="hidden min-w-max max-w-[280px] flex-1 flex-col justify-between gap-4 bg-black px-4 py-8 md:flex">
      <nav className="flex flex-col gap-4 font-bold">
        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-4 text-gray-300"
          href="/"
        >
          <MagnifyingGlass size={24} weight="bold" />
          Triagem
        </Link>

        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-4 text-gray-300"
          href="/troca-de-senha"
        >
          <LockSimple size={24} weight="bold" />
          Troca de Senha
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-4 text-gray-300"
          href="/config-roteador"
        >
          <Faders size={24} weight="bold" />
          Config. Roteador
        </Link>

        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-4 text-gray-300"
          href="/rompimento"
        >
          <PlugsConnected size={24} weight="bold" />
          Rompimento
        </Link>

        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-4 text-gray-300"
          href="/manutencao"
        >
          <Barricade size={24} weight="bold" />
          Manutenção
        </Link>

        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-4 text-gray-300"
          href="/scripts"
        >
          <Scroll size={24} weight="bold" />
          Scripts
        </Link>
      </nav>

      <span className="text-center text-sm text-gray-500">
        Made with 💙 by{' '}
        <a href="https://diegonatalo.vercel.app" className="underline">
          Diego Natalo
        </a>
      </span>
    </aside>
  )
}
