import { twMerge } from 'tailwind-merge'
import { NavItem } from './nav-item'

import { useNavbar } from '@/common/presentation/contexts'

export function NavBar() {
  const { navbarState } = useNavbar()

  return (
    <nav
      className={twMerge(
        'hidden gap-8 text-sm lg:flex 2xl:text-base',
        navbarState === 'transparent' || navbarState === 'black'
          ? 'text-zinc-200'
          : 'text-zinc-700',
      )}
    >
      <NavItem href="/highlights">DESTAQUES</NavItem>
      <NavItem href="/about">SOBRE NÓS</NavItem>
      <NavItem href="/credits">CRÉDITOS</NavItem>
      <NavItem href="/categories">CATEGORIAS</NavItem>
    </nav>
  )
}
