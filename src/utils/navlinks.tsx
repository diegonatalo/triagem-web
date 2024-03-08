import {
  AndroidLogo,
  Barricade,
  Chats,
  Faders,
  LockSimple,
  PlugsConnected,
  Scroll,
  ShieldCheck,
  Stethoscope
} from '@phosphor-icons/react'
import { ReactNode } from 'react'

export type NavLinkType = {
  href: string
  title: string
  icon: ReactNode
  subItem?: {
    href: string
    title: string
    icon: ReactNode
  }[]
}

export const NavLinks: NavLinkType[] = [
  {
    href: 'copilot',
    title: 'Copilot',
    icon: <AndroidLogo size={24} weight="bold" />
  },
  {
    href: '',
    title: 'Triagem',
    icon: <Stethoscope size={24} weight="bold" />
  },
  {
    href: 'troca-de-senha',
    title: 'Troca de Senha',
    icon: <LockSimple size={24} weight="bold" />
  },
  {
    href: 'config-roteador',
    title: 'Config. Roteador',
    icon: <Faders size={24} weight="bold" />
  },
  {
    href: 'rompimento',
    title: 'Rompimento',
    icon: <PlugsConnected size={24} weight="bold" />
  },
  {
    href: 'manutencao',
    title: 'Manutenção',
    icon: <Barricade size={24} weight="bold" />
  },
  {
    href: '',
    title: 'Scripts',
    icon: <Scroll size={24} weight="bold" />,
    subItem: [
      {
        href: 'smart',
        title: 'Smart',
        icon: <Chats size={24} weight="bold" />
      },
      {
        href: 'finalizacao',
        title: 'Finalização',
        icon: <ShieldCheck size={24} weight="bold" />
      }
    ]
  }
]
