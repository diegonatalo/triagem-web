import { NavLinkType } from '@/utils/navlinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type NavLinkProps = {
  link: NavLinkType
  isSubItem?: boolean
  full: boolean
}

export const NavLink = ({ link, isSubItem = false, full }: NavLinkProps) => {
  const pathname = usePathname()
  let defaultClass = ''

  if (isSubItem) {
    defaultClass =
      'flex items-center gap-3 p-6 pl-12 text-gray-300 bg-gray-900/50 hover:bg-gray-900 transition-colors'
  } else {
    defaultClass =
      'flex items-center gap-3 p-6 text-gray-300 hover:bg-gray-900/50 transition-colors'
  }

  return (
    <Link
      className={`${defaultClass} ${pathname === `/${link.href}` ? 'text-sky-500' : ''}`}
      href={`/${link.href}`}
    >
      {link.icon}
      {full && link.title}
    </Link>
  )
}
