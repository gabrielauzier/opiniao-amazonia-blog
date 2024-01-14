import { ComponentProps } from 'react'

import { Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { useNavbar } from '@/common/presentation/contexts'

export function LoginButton(props: ComponentProps<'button'>) {
  const { navbarState } = useNavbar()

  console.log(navbarState)

  return (
    <div className="hidden items-center gap-6 lg:flex">
      <Search />
      <button
        className={twMerge(
          'rounded-sm bg-black px-10 py-2 text-base shadow-sm',
          navbarState === 'black'
            ? 'bg-zinc-100 text-zinc-700'
            : 'bg-zinc-900 text-zinc-100',
          props.className,
        )}
      >
        Entrar
      </button>
    </div>
  )
}
