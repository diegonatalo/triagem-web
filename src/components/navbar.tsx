'use client'

import { NavLinks } from '@/utils/navlinks'
import { useState } from 'react'
import { RadixAccordion } from './accordion'
import { NavLink } from './navLink'

export const Navbar = () => {
  const [width, setWidth] = useState(false)

  return (
    <aside
      className="fixed z-10 flex min-h-full w-max max-w-[260px] flex-col justify-between gap-4 bg-black py-6 transition-all"
      onMouseEnter={() => setWidth(true)}
      onMouseLeave={() => setWidth(false)}
    >
      <nav className="flex flex-col font-bold">
        {NavLinks.map((item) =>
          !item.subItem ? (
            <NavLink key={item.title} link={item} full={width} />
          ) : (
            <RadixAccordion key={item.title} link={item} full={width} />
          )
        )}
      </nav>

      {width && (
        <span className="text-center text-sm text-gray-500/50">
          Made with 💙
          <br />
          by{' '}
          <a href="https://diegonatalo.vercel.app" className="underline">
            Diego Natalo
          </a>
        </span>
      )}
    </aside>
  )
}
