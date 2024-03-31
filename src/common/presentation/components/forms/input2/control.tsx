import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type ControlProps = InputHTMLAttributes<HTMLInputElement>

export function Control(props: ControlProps) {
  return (
    <input
      {...props}
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-zinc-700 placeholder-zinc-500 outline-none focus:ring-0',
        props.className,
      )}
    />
  )
}
