'use client'

import * as RadixSwitch from '@radix-ui/react-switch'

export function Switch() {
  return (
    <RadixSwitch.Root className="h-9 w-[4.25rem] rounded-full bg-zinc-900 p-0.5">
      <RadixSwitch.Thumb className="block h-8 w-8 rounded-full bg-white transition duration-100 data-[state='checked']:translate-x-full"></RadixSwitch.Thumb>
    </RadixSwitch.Root>
  )
}
