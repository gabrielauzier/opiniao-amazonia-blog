import { Badge } from '@/common/presentation/components/ui/badge'
import Image from 'next/image'

interface PostCarouselHighlightProps {
  imgUrl: string
  title: string
}

export function PostCarouselHighlight({
  imgUrl,
  title,
}: PostCarouselHighlightProps) {
  return (
    <div className="bg-shadow relative h-full w-full rounded border shadow-inner">
      <Image
        src={imgUrl}
        fill={true}
        alt=""
        className="rounded object-cover object-center"
      />
      <div className="absolute top-0 h-full w-full rounded bg-gradient-to-t from-black from-20% via-black to-white/50 to-95% opacity-25"></div>
      <div className="absolute bottom-0 flex flex-col gap-3 px-4 pb-8">
        <Badge className="w-fit">Central da Política</Badge>
        <strong className="text-2xl font-extrabold leading-7 text-white">
          {title}
        </strong>
      </div>
    </div>
  )
}
