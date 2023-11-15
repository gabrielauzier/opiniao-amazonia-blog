import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { NavItem } from './NavItem'

interface NavBarProps {
  isBackgroundTransparent?: boolean
}

export function NavBar({ isBackgroundTransparent = false }: NavBarProps) {
  const currentPath = usePathname()

  return (
    <nav
      className={twMerge(
        'hidden gap-8 text-sm lg:flex 2xl:text-base',
        isBackgroundTransparent && currentPath === '/'
          ? 'text-zinc-200'
          : 'text-zinc-700',
        currentPath !== '/' && 'text-zinc-200',
      )}
    >
      <NavItem href="/">DESTAQUES</NavItem>
      <NavItem href="/about">SOBRE NÓS</NavItem>
      <NavItem href="/">CRÉDITOS</NavItem>
      <NavItem href="/">CATEGORIAS</NavItem>
    </nav>
  )
}
