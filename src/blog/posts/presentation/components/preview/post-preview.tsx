import Image from 'next/image'

import { Badge } from '@/common/presentation/components/ui/badge'

interface PostPreviewProps {
  slug: string
  title: string
  excerpt: string
  date: string
  categories: string[]
  imgUrl: string
}

export function PostPreview({ title, imgUrl }: PostPreviewProps) {
  return (
    <div>
      <div className="relative z-10 mb-2 flex h-48 w-full items-center justify-center rounded-xl shadow-sm">
        <Image
          src={imgUrl}
          fill={true}
          alt=""
          className="absolute left-0 top-0 h-full w-fit object-cover object-center opacity-90"
        />

        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/70 from-0% via-black/10 via-50% to-black/30"></div>
        <div className="absolute left-4 top-4">
          <Badge variant="secondary">Central da Política</Badge>
        </div>
      </div>
      <strong className="text-lg font-semibold leading-3 text-foreground">
        {title}
      </strong>
    </div>
  )
}
