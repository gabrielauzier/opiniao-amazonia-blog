import { Search } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { usePathname } from 'next/navigation'

export function LoginButton() {
  const currentPath = usePathname()

  return (
    <div className="flex items-center gap-6">
      <Search />
      <button
        className={twMerge(
          'rounded-sm bg-black px-10 py-2 text-base shadow-sm',
          currentPath === '/'
            ? 'bg-zinc-900 text-zinc-100'
            : 'bg-zinc-100 text-zinc-700',
        )}
      >
        Entrar
      </button>
    </div>
  )
}
