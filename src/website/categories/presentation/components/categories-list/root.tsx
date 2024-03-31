import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function Root({ children, ...props }: RootProps) {
  return (
    <div className={twMerge('flex flex-wrap gap-1', props.className)}>
      {children}
    </div>
  )
}
