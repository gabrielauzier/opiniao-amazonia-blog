import { ReactNode } from 'react'

interface ListProps {
  children: ReactNode
}

export function List({ children }: ListProps) {
  return (
    <div className="mx-auto grid max-w-[28rem] gap-10 lg:max-w-full lg:grid-cols-5">
      {children}
    </div>
  )
}
