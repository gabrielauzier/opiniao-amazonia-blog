import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface RootProps extends ComponentProps<'section'> {
  children: ReactNode
}

export function Root({ children, ...props }: RootProps) {
  return (
    <section
      className={twMerge(
        'mx-auto mb-14 mt-0 max-w-[28rem] px-5 lg:mb-28 lg:max-w-body lg:px-0',
        props.className,
      )}
    >
      {children}
    </section>
  )
}
