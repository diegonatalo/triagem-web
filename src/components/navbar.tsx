import {
  Barricade,
  Faders,
  LockSimple,
  MagnifyingGlass,
  MapTrifold,
  PlugsConnected
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { RadixAccordion } from './accordion'

export const Navbar = () => {
  const defaultClass =
    'flex items-center gap-3 p-6 text-gray-300 hover:bg-gray-900/50 transition-colors'

  return (
    <aside className="hidden min-h-full w-full max-w-[260px] flex-col justify-between gap-4 bg-black py-6 md:flex">
      <nav className="flex flex-col font-bold">
        <Link className={defaultClass} href="/guide">
          <MapTrifold size={24} weight="bold" />
          Guia
        </Link>

        <Link className={defaultClass} href="/">
          <MagnifyingGlass size={24} weight="bold" />
          Triagem
        </Link>

        <Link className={defaultClass} href="/troca-de-senha">
          <LockSimple size={24} weight="bold" />
          Troca de Senha
        </Link>
        <Link className={defaultClass} href="/config-roteador">
          <Faders size={24} weight="bold" />
          Config. Roteador
        </Link>

        <Link className={defaultClass} href="/rompimento">
          <PlugsConnected size={24} weight="bold" />
          Rompimento
        </Link>

        <Link className={defaultClass} href="/manutencao">
          <Barricade size={24} weight="bold" />
          Manutenção
        </Link>

        <RadixAccordion />
      </nav>

      <span className="text-center text-sm text-gray-500">
        Made with 💙
        <br />
        by{' '}
        <a href="https://diegonatalo.vercel.app" className="underline">
          Diego Natalo
        </a>
      </span>
    </aside>
  )
}
