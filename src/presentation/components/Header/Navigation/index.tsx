import { twMerge } from 'tailwind-merge'

interface NavBarProps {
  isBackgroundTransparent: boolean
  currentPath: string
}

export function NavBar({ isBackgroundTransparent, currentPath }: NavBarProps) {
  return (
    <nav
      className={twMerge(
        'flex gap-8 text-sm 2xl:text-base',
        isBackgroundTransparent && currentPath === '/'
          ? 'text-zinc-200'
          : 'text-zinc-700',
        currentPath !== '/' && 'text-zinc-200',
      )}
    >
      <span>DESTAQUES</span>
      <span>QUEM SOMOS</span>
      <span>CRÉDITOS</span>
      <span>CATEGORIAS</span>
    </nav>
  )
}
