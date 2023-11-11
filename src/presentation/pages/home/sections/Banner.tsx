import { ArrowRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import Link from 'next/link'

export function Banner() {
  return (
    <section
      className={twMerge(
        'flex w-full flex-col items-center justify-center gap-1 bg-hero bg-cover text-center font-normal shadow-xl',
        'h-[32rem]',
      )}
    >
      <h2 className="px-5 text-4xl text-white lg:text-6xl">
        NAVEGUE PELA SELVA DAS IDEIAS
      </h2>
      <h2 className="text-xl text-white lg:text-4xl">
        O Palco do Debate Político Amazônico!
      </h2>
      <Link
        className="group mt-10 flex w-fit cursor-pointer items-center gap-2 rounded-sm bg-white px-10 py-4 text-black shadow-md duration-300 ease-in-out hover:scale-110"
        href="/posts"
      >
        Conheça nosso blog
        <span className="rounded-full bg-black p-1 duration-300 ease-in-out group-hover:bg-emerald-500">
          <ArrowRight className="h-4 w-4 text-white" />
        </span>
      </Link>
    </section>
  )
}
