import Link from 'next/link'
import { cn } from '../../utils/classnames'

export function Brand() {
  return (
    <Link href="/">
      <h1
        className={cn(
          'cursor-pointer text-white',
          'text-center font-serif text-base font-bold md:text-2xl 2xl:text-4xl',
        )}
      >
        Opinião Amazônia
      </h1>
    </Link>
  )
}
