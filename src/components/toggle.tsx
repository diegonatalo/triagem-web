'use client'

import * as Toggle from '@radix-ui/react-toggle'

type RadixToggleProps = {
  title: string
  defaultPressed?: boolean
  onPressChange: () => void
}

export const RadixToggle = ({
  title,
  defaultPressed = true,
  onPressChange
}: RadixToggleProps) => {
  return (
    <Toggle.Root
      defaultPressed={defaultPressed}
      onPressedChange={onPressChange}
      aria-label={`Toggle ${title}`}
      className="flex w-full items-center justify-center rounded-lg border-red-500 bg-red-500/30 p-4 font-bold text-red-500 opacity-75 hover:opacity-100 focus-visible:opacity-100 data-[state=on]:border-green-500 data-[state=on]:bg-green-500/30 data-[state=on]:text-green-500"
    >
      {title}
    </Toggle.Root>
  )
}
