import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/common/presentation/assets'
import { PostPreviewModel } from '@/website/posts/domain'
import { FeaturedPosts, SocialMedia } from '../../../components'

interface AsideProps {
  featuredPosts: PostPreviewModel[]
}

export function Aside({ featuredPosts }: AsideProps) {
  return (
    <aside className="w-full px-7 lg:w-1/4 lg:px-0">
      <FeaturedPosts posts={featuredPosts} />

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
