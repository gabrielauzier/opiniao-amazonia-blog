import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ItemProps extends ComponentProps<'div'> {
  children: string
}

export function Item({ children, ...props }: ItemProps) {
  return (
    <div
      className={twMerge(
        'z-10 flex h-40 w-full items-center justify-center rounded-sm border border-zinc-300 bg-cover shadow-sm',
        props.className,
      )}
    >
      <span className="text-medium text-2xl font-semibold text-zinc-300 shadow-sm ">
        {children}
      </span>
    </div>
  )
}
