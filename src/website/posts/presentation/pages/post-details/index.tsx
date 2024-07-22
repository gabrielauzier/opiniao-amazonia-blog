import { Newsletter } from '@/website/newsletter/presentation/components'
import { PostModel, PostPreviewModel } from '@/website/posts/domain'

import { Comments } from '../../components/comments'
import { Author } from './author'
import { Path } from './path'
import { Picture } from './picture'
import { Content } from './content'
import { Aside } from './aside'

interface PostDetailsProps {
  post: PostModel
  topPosts: PostPreviewModel[]
}

export function PostDetails({ post, topPosts }: PostDetailsProps) {
  return (
    <div className="bg-surface-secondary h-full pt-[2rem]">
      <div className="mx-auto w-full max-w-[1020px]">
        <Path title={post.title} />
        <div className="mt-3 flex flex-col lg:flex-row">
          <article className="mb-20 w-full bg-white">
            <Picture {...post} />
            <Content html={post.content} />
            {/* <Author />
            <Comments /> */}
            {/* <Newsletter /> */}
          </article>
        </div>
      </div>
    </div>
  )
}
