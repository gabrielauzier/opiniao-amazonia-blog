import Link from 'next/link'
import { cn } from '../../utils/classnames'

export function Brand() {
  return (
    <Link href="/">
      <h2
        className={cn(
          'cursor-pointer text-white',
          'text-center font-serif text-2xl font-bold md:text-3xl 2xl:text-4xl',
        )}
      >
        Opinião Amazônia
      </h2>
    </Link>
  )
}
