import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface PostPreviewProps {
  slug: string
  title: string
  excerpt: string
  date: string
  categories: string[]
  imgUrl: string
}

export function PostPreview({
  title,
  excerpt,
  date,
  categories,
  imgUrl,
  slug,
}: PostPreviewProps) {
  return (
    <div>
      <div className="relative z-10 flex h-64 w-full items-center justify-center rounded-sm border border-zinc-300 bg-zinc-400 shadow-sm">
        <Image
          src={imgUrl}
          fill={true}
          alt=""
          className="absolute left-0 top-0 h-full w-fit object-cover object-center opacity-90"
        />
        <div className="z-11 absolute left-0 top-0 mt-7 flex w-full flex-wrap gap-1 px-4 shadow-sm">
          {categories.map((category) => (
            <div
              className="z-9 h-fit rounded-sm bg-zinc-500 bg-opacity-30 px-3 py-1"
              key={category}
            >
              <span className="text-white">{category}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4 h-[112px] lg:h-[128px] 2xl:mt-8">
        <span className="line-clamp-4 text-xl text-zinc-700 2xl:text-2xl">
          {title}
        </span>
      </div>
      <div>
        <span className="text-zinc-400">{date}</span>
        {/* <span className="text-zinc-400"> • 1min de leitura</span> */}
      </div>
      <div className="my-6">
        <p className="line-clamp-5 h-[120px] text-zinc-500">{excerpt}</p>
      </div>
      <Link
        href={`/post/${slug}`}
        className="group flex w-fit items-center gap-2 rounded-full text-zinc-800 underline underline-offset-4 hover:text-zinc-600"
      >
        Ver post
        <ArrowRight className="hidden h-4 w-4 animate-slideRightAndFade text-zinc-600 group-hover:block" />
      </Link>
    </div>
  )
}
