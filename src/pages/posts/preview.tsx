import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import _ from 'lodash'
import { CategoriesList } from '@/website/categories/presentation/components'

interface PreviewProps {
  slug: string
  title: string
  excerpt: string
  date: string
  categories: string[]
  imgUrl: string
}

export function Preview({
  title,
  excerpt,
  date,
  categories,
  imgUrl,
  slug,
}: PreviewProps) {
  return (
    <div>
      <div className="relative z-10 flex h-80 w-full items-center justify-center rounded-xl shadow-sm">
        <Image
          src={imgUrl}
          fill={true}
          alt=""
          className="absolute left-0 top-0 h-full w-fit rounded-xl object-cover object-center opacity-90"
        />

        <div className="absolute top-0 h-full w-full rounded-2xl bg-gradient-to-t from-black/70 from-0% via-black/10 via-50% to-black/30"></div>

        <CategoriesList.Root className="z-11 absolute left-0 top-0 mt-7 px-4 shadow-sm">
          {categories.map((category) => (
            <CategoriesList.Item
              key={category}
              className="bg-emerald-400 bg-opacity-100 hover:bg-opacity-100"
            >
              {category}
            </CategoriesList.Item>
          ))}
        </CategoriesList.Root>

        <h2 className="absolute bottom-0 left-0 px-4 py-3 text-2xl font-extrabold text-white">
          {title}
        </h2>
      </div>

      {/* <div className="my-4 mt-8 h-20">
        <span className="line-clamp-3 text-xl text-zinc-700 2xl:text-2xl">
          {title}
        </span>
      </div> */}

      {/* <div className="flex gap-2 pt-6">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-emerald-200" />
          <span className="text-sm font-medium text-zinc-700">
            Gabriel Auzier
          </span>
        </div>
        <div>
          <span className="mt-6 gap-4 text-xs text-zinc-500">
            <span className="font-medium text-zinc-300">—— </span>{' '}
            {formatDate(date)}
          </span>
        </div>
      </div> */}

      {/* <div className="my-6">
        <p className="line-clamp-5 h-[100px] text-sm text-zinc-500">
          {excerpt}
        </p>
      </div> */}

      {/* <Link
        href={`/post/${slug}`}
        className="group flex w-fit items-center gap-2 rounded-full text-zinc-800 underline underline-offset-4 hover:text-zinc-600"
      >
        Ver post
        <ArrowRight className="hidden h-4 w-4 animate-slideRightAndFade text-zinc-600 group-hover:block" />
      </Link> */}
    </div>
  )
}

function formatDate(val: string) {
  return _.capitalize(format(new Date(val), 'MMMM dd, yyyy', { locale: ptBR }))
}
