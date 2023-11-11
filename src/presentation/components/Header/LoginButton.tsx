import { Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

type LoginButtonProps = ComponentProps<'button'>

export function LoginButton(props: LoginButtonProps) {
  const currentPath = usePathname()

  return (
    <div className="hidden items-center gap-6 lg:flex">
      <Search />
      <button
        className={twMerge(
          'rounded-sm bg-black px-10 py-2 text-base shadow-sm',
          currentPath === '/'
            ? 'bg-zinc-900 text-zinc-100'
            : 'bg-zinc-100 text-zinc-700',
          props.className,
        )}
      >
        Entrar
      </button>
    </div>
  )
}
