import { twMerge } from 'tailwind-merge'

interface NavBarProps {
  isBackgroundTransparent: boolean
}

export function NavBar({ isBackgroundTransparent }: NavBarProps) {
  return (
    <nav
      className={twMerge(
        'flex gap-8 text-sm 2xl:text-base',
        isBackgroundTransparent ? 'text-white' : 'text-zinc-700',
      )}
    >
      <span>DESTAQUES</span>
      <span>QUEM SOMOS</span>
      <span>CRÉDITOS</span>
      <span>CATEGORIAS</span>
    </nav>
  )
}
