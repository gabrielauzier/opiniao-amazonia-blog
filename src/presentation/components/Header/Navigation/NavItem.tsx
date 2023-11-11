import { ReactNode } from 'react'

interface NavItemProps {
  children: ReactNode
}

export function NavItem({ children }: NavItemProps) {
  return <a className="cursor-pointer hover:text-emerald-400">{children}</a>
}
