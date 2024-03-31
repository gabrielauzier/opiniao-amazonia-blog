import Image from 'next/image'

interface HighlightProps {
  imgUrl: string
  title: string
}

export function Highlight({ imgUrl, title }: HighlightProps) {
  return (
    <div className="bg-shadow relative h-full w-full shadow-inner">
      <Image
        src={imgUrl}
        fill={true}
        alt=""
        priority
        className="rounded-2xl object-cover object-center"
      />
      <div className="absolute top-0 h-full w-full rounded-2xl bg-gradient-to-t from-black from-20% via-black to-white/50 to-95% opacity-25"></div>
      <div className="absolute bottom-0 flex flex-col gap-3 px-4 pb-8 lg:px-20">
        <span className="w-fit rounded-lg bg-cyan-600 px-3 py-1.5 font-bold text-white shadow-sm">
          Central da Política
        </span>
        <strong className="text-4xl font-extrabold text-white">{title}</strong>
      </div>
    </div>
  )
}
