import Link from 'next/link'
import { LuChevronRight } from 'react-icons/lu'

interface PathProps {
  title: string
}

export function Path({ title }: PathProps) {
  return (
    <span className="flex items-center gap-1 px-7 text-xs text-zinc-600 lg:px-0">
      <Link className="hover:text-zinc-800" href="/">
        Início
      </Link>
      <LuChevronRight className="h-3 w-3" />
      <Link className="hover:text-zinc-800" href="/posts">
        Posts
      </Link>
      <LuChevronRight className="h-3 w-3" />
      <span className="w-72 truncate">{title}</span>
    </span>
  )
}
