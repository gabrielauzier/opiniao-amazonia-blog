import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ItemProps extends ComponentProps<'div'> {
  children: string
}

export function Item({ children, ...props }: ItemProps) {
  return (
    <div
      className={twMerge(
        'z-9 h-fit cursor-pointer rounded-sm bg-zinc-50 bg-opacity-20 px-3 py-1 transition duration-150 ease-in-out hover:scale-105 hover:bg-opacity-10',
        props.className,
      )}
    >
      <span className="text-zinc-50">{children}</span>
    </div>
  )
}
