import { PostModel } from '@/__deprecated/domain/models'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/common/presentation/assets'
import { PostPreviewModel } from '@/website/posts/domain'
import Image from 'next/image'
import { SocialMedia } from '../../../components'

interface AsideProps {
  topPosts: PostPreviewModel[]
}

export function Aside({ topPosts }: AsideProps) {
  return (
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
          <SocialMedia
            icon={<FacebookIcon className="h-6 w-6" />}
            name="Facebook"
            infoData="439"
            infoText="curtidas"
          />
          <SocialMedia
            icon={<TwitterIcon className="h-6 w-6" />}
            name="Twitter"
            infoData="3.5 mil"
            infoText="seguidores"
          />
          <SocialMedia
            icon={<InstagramIcon className="h-6 w-6" />}
            name="Instagram"
            infoData="13 mil"
            infoText="curtidas"
          />
          <SocialMedia
            icon={<LinkedInIcon className="h-6 w-6" />}
            name="LinkedIn"
            infoData="32"
            infoText="postagens"
          />
          <SocialMedia
            icon={<YoutubeIcon className="h-6 w-6" />}
            name="Youtube"
            infoData="32 mil"
            infoText="visualizações"
          />
          <SocialMedia
            icon={<TelegramIcon className="h-6 w-6" />}
            name="Youtube"
            infoData="947 mil"
            infoText="shared"
          />
        </div>
      </div>
    </aside>
  )
}
