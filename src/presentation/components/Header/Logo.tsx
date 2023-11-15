import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export function Logo() {
  return (
    <Link href="/">
      <h1
        className={twMerge(
          'cursor-pointer bg-gradient-to-r from-emerald-300 to-emerald-600 bg-clip-text font-serif text-2xl font-semibold text-transparent lg:text-3xl',
        )}
      >
        Opinião Amazônia
      </h1>
    </Link>
  )
}
