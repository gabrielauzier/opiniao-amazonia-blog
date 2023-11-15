import Link from 'next/link'
import { ReactNode } from 'react'

interface NavItemProps {
  children: ReactNode
  href: string
}

export function NavItem({ children, href }: NavItemProps) {
  return (
    <Link href={href} className="cursor-pointer hover:text-emerald-400">
      {children}
    </Link>
  )
}
