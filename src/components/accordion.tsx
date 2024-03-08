'use client'

import { NavLinkType } from '@/utils/navlinks'
import { CaretDown } from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'
import { NavLink } from './navLink'

export type RadixAccordionProps = {
  link: NavLinkType
  full: boolean
}

export const RadixAccordion = ({ link, full }: RadixAccordionProps) => {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className="group w-full">
          <div className="flex items-center gap-3 p-6 text-gray-300 transition-colors hover:bg-gray-900/50">
            {link.icon}
            {full && link.title}
            {full && (
              <CaretDown
                size={16}
                weight="bold"
                className="ml-auto transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
              />
            )}
          </div>
        </Accordion.Trigger>

        {full && (
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            {link.subItem!.map((item) => (
              <NavLink
                key={item.title}
                link={item}
                isSubItem={true}
                full={full}
              />
            ))}
          </Accordion.Content>
        )}
      </Accordion.Item>
    </Accordion.Root>
  )
}
