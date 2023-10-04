import { ReactElement } from 'react'

interface RootProps {
  children: ReactElement[]
}

export function Root({ children }: RootProps) {
  return <div className="flex flex-wrap gap-2.5">{children}</div>
}
