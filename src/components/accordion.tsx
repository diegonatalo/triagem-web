'use client'

import { CaretDown, Chats, Scroll, ShieldCheck } from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'
import Link from 'next/link'

export const RadixAccordion = () => {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className="group w-full">
          <div className="flex items-center gap-3 p-6 text-gray-300 transition-colors hover:bg-gray-900/50">
            <Scroll size={24} weight="bold" />
            Scripts
            <CaretDown
              size={16}
              weight="bold"
              className="ml-auto transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
            />
          </div>
        </Accordion.Trigger>

        <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          <Link
            className="flex items-center gap-3 bg-zinc-900/50 p-6 pl-10 text-gray-300 transition-colors hover:bg-zinc-900"
            href="/smart"
          >
            <Chats size={24} weight="bold" />
            Smart
          </Link>
          <Link
            className="flex items-center gap-3 bg-zinc-900/50 p-6 pl-10 text-gray-300 transition-colors hover:bg-zinc-900"
            href="/scripts"
          >
            <ShieldCheck size={24} weight="bold" />
            Finalização
          </Link>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}
