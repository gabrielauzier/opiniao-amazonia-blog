import { twMerge } from 'tailwind-merge'
import { NavItem } from './NavItem'
import { useNavbar } from '@/presentation/contexts'

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
      <NavItem href="/">DESTAQUES</NavItem>
      <NavItem href="/about">SOBRE NÓS</NavItem>
      <NavItem href="/">CRÉDITOS</NavItem>
      <NavItem href="/">CATEGORIAS</NavItem>
    </nav>
  )
}
