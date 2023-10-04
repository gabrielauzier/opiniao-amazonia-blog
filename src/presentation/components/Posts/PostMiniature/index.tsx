import { Image as Photo } from 'lucide-react'

interface PostMiniatureProps {
  title: string
  date: string
}

export function PostMiniature({ title, date }: PostMiniatureProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-fit w-fit items-center justify-center rounded-full bg-orange-100 p-5">
        <Photo className="h-15 w-15 text-orange-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-light text-zinc-500">{date}</span>
        <span className="text-zinc-800">{title}</span>
      </div>
    </div>
  )
}
