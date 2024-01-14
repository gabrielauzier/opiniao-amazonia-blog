import '@/common/presentation/styles/post.css'

import Link from 'next/link'
import Image from 'next/image'
import { LuChevronRight } from 'react-icons/lu'
import { Clock, BarChart2 } from 'lucide-react'

import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
  TelegramIcon,
} from '@/common/presentation/assets'

import { PostModel, PostPreviewModel } from '@/website/posts/domain'
import { Author } from './author'
import { Newsletter } from './newsletter'

interface PostDetailsProps {
  post: PostModel
  topPosts: PostPreviewModel[]
}

export function PostDetails({ post, topPosts }: PostDetailsProps) {
  return (
    <div className="h-full bg-surface-seconday pt-[7rem]">
      <div className="mx-auto w-full max-w-body">
        <span className="flex items-center gap-1 px-7 text-xs text-zinc-600 lg:px-0">
          <Link className="hover:text-zinc-800" href="/">
            Início
          </Link>
          <LuChevronRight className="h-3 w-3" />
          <Link className="hover:text-zinc-800" href="/posts">
            Posts
          </Link>
          <LuChevronRight className="h-3 w-3" />
          <span className="w-72 truncate">{post.title}</span>
        </span>
        <div className="mt-3 flex flex-col gap-14 lg:flex-row">
          <article className="mb-28 w-full bg-white lg:w-3/4">
            <div className="relative z-10 flex h-[28rem] w-full rounded-sm border-0 border-zinc-300 bg-zinc-400 shadow-sm lg:border">
              <Image
                src={post.imgUrl}
                fill={true}
                alt="Post image"
                className="object-cover object-center"
              />
              <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between bg-black bg-opacity-20 px-3 py-7">
                <div className="flex flex-wrap gap-1">
                  {post.categories.map((category) => (
                    <div
                      className="z-9 h-fit cursor-pointer rounded-sm bg-zinc-50 bg-opacity-20 px-3 py-1 transition duration-150 ease-in-out hover:scale-105 hover:bg-opacity-10"
                      key={category}
                    >
                      <span className="text-zinc-50">{category}</span>
                    </div>
                  ))}
                </div>

                <div className="px-3">
                  <h1 className="text-xl font-medium text-zinc-50 lg:text-3xl">
                    {post.title.toUpperCase()}
                  </h1>
                  <h2 className="mb-2 mt-4 text-xl font-medium text-zinc-100">
                    Some subtile optional you want to put
                  </h2>
                  <div className="flex items-center gap-2 text-sm font-light text-zinc-100">
                    <span>por {post.author}</span>
                    <span>—</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />2 minutos de leitura
                    </span>
                    <span>—</span>
                    <span className="flex items-center gap-1">
                      <BarChart2 className="h-4 w-4" />
                      32mil visualizações
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* excerpt + tabela de conteúdos */}
            {/* <div className="mt-7 flex flex-col gap-4 px-7 text-zinc-600 lg:mt-14 lg:px-14">
              <p>{faker.lorem.paragraphs(1)}</p>
              <div className="mt-7 border-y py-12">
                <strong className="font-mono font-light tracking-[0.150rem] text-zinc-700">
                  TABELA DE CONTEÚDOS
                </strong>
                <span className="mt-7 flex flex-col gap-2">
                  <a className="flex cursor-pointer items-center text-sm text-emerald-500 hover:text-emerald-600">
                    <span className="mr-4 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 p-2 text-xxs font-semibold text-zinc-700">
                      1
                    </span>
                    Nam condimentum varius justo
                  </a>
                  <a className="flex cursor-pointer items-center text-sm text-emerald-500 hover:text-emerald-600">
                    <span className="mr-4 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 p-2 text-xxs font-semibold text-zinc-700">
                      2
                    </span>
                    Faucibus nullam luctus felis pretium donec
                  </a>
                  <ul className="ml-20 flex list-outside list-disc flex-col gap-2">
                    <li className="text-sm text-emerald-500 marker:text-zinc-200">
                      <a className="flex cursor-pointer items-center text-sm text-emerald-500 hover:text-emerald-600">
                        Tincidunt veni tellus orci aenean consectetuer
                      </a>
                    </li>
                    <li className="text-sm text-emerald-500 marker:text-zinc-200">
                      <a className="flex cursor-pointer items-center text-sm text-emerald-500 hover:text-emerald-600">
                        Eu ridiculus fringilla
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div> */}

            {/* <div className="mt-7 flex flex-col gap-4 px-7 text-zinc-600 lg:mt-14 lg:px-140">
              <h3 className="mb-4 mt-7 text-2xl text-zinc-800">
                {TextUtils.titleCase(faker.lorem.sentences(1))}
              </h3>
              <p>{faker.lorem.paragraphs(6)}</p>
              <p>{faker.lorem.paragraphs(9)}</p>
              <p>{faker.lorem.paragraphs(2)}</p>
              <p>{faker.lorem.paragraphs(6)}</p>
              <p>{faker.lorem.paragraphs(9)}</p>
              <h3 className="mb-4 mt-7 text-2xl text-zinc-800">
                {TextUtils.titleCase(faker.lorem.sentences(1))}
              </h3>
              <p>{faker.lorem.paragraphs(2)}</p>
              <p>{faker.lorem.paragraphs(6)}</p>
              <p>{faker.lorem.paragraphs(9)}</p>
              <h3 className="mb-4 mt-7 text-2xl text-zinc-800">
                {TextUtils.titleCase(faker.lorem.sentences(1))}
              </h3>
              <p>{faker.lorem.paragraphs(2)}</p>
              <p>{faker.lorem.paragraphs(2)}</p>
              <p>{faker.lorem.paragraphs(6)}</p>
              <p>{faker.lorem.paragraphs(9)}</p>
            </div> */}

            <div
              className="lg:px-140 mt-7 flex flex-col gap-4 px-7 text-zinc-600 lg:mt-14"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Author />

            <div className="mt-0 flex w-full items-center justify-center px-14">
              <button className="rounded bg-zinc-900 px-10 py-4 font-medium text-zinc-200 shadow-md hover:bg-zinc-700">
                Ver comentários (0)
              </button>
            </div>

            <Newsletter />
          </article>
          <aside className="w-full px-7 lg:w-1/4 lg:px-0">
            <div className="flex w-full flex-col gap-6">
              {topPosts.map((post) => (
                <div key={post.id} className="flex h-fit w-full gap-6">
                  <div className="relative z-10 h-20 w-20">
                    <Image
                      alt={post.slug}
                      src={post.imgUrl}
                      fill={true}
                      className="absolute left-0 top-0 rounded-full object-cover object-center shadow-sm"
                    />
                  </div>
                  <span className="font line-clamp-3 h-[60px] w-32 text-sm text-zinc-700">
                    {post.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-28 h-96">
              <strong className="font-mono font-light tracking-[0.150rem] text-zinc-700">
                REDES SOCIAIS
              </strong>
              <div className="mt-6 grid h-10 w-full grid-cols-3 items-center gap-6">
                <div className="flex flex-col items-center justify-center">
                  <FacebookIcon className="h-6 w-6" />
                  <span className="mb-1 mt-2 text-sm text-zinc-700">
                    Facebook
                  </span>
                  <span className="flex flex-col items-center gap-0 text-sm leading-4 text-zinc-500">
                    439
                    <span className="text-xs text-zinc-400">curtidas</span>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <TwitterIcon className="h-6 w-6" />
                  <span className="mb-1 mt-2 text-sm text-zinc-700">
                    Twitter
                  </span>
                  <span className="flex flex-col items-center gap-0 text-sm leading-4 text-zinc-500">
                    3.5mil
                    <span className="text-xs text-zinc-400">seguidores</span>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <InstagramIcon className="h-6 w-6" />
                  <span className="mb-1 mt-2 text-sm text-zinc-700">
                    Instagram
                  </span>
                  <span className="flex flex-col items-center gap-0 text-sm leading-4 text-zinc-500">
                    13mil
                    <span className="text-xs text-zinc-400">curtidas</span>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <LinkedInIcon className="h-6 w-6" />
                  <span className="mb-1 mt-2 text-sm text-zinc-700">
                    LinkedIn
                  </span>
                  <span className="flex flex-col items-center gap-0 text-sm leading-4 text-zinc-500">
                    32
                    <span className="text-xs text-zinc-400">postagens</span>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <YoutubeIcon className="h-6 w-6" />
                  <span className="mb-1 mt-2 text-sm text-zinc-700">
                    Youtube
                  </span>
                  <span className="flex flex-col items-center gap-0 text-sm leading-4 text-zinc-500">
                    32mil
                    <span className="text-xs text-zinc-400">visualizações</span>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <TelegramIcon className="h-6 w-6" />
                  <span className="mb-1 mt-2 text-sm text-zinc-700">
                    Telegram
                  </span>
                  <span className="flex flex-col items-center gap-0 text-sm leading-4 text-zinc-500">
                    947
                    <span className="text-xs text-zinc-400">shared</span>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
