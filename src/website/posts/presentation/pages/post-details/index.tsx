import { PostModel, PostPreviewModel } from '@/website/posts/domain'
import { Author } from './author'
import { Newsletter } from '../../components/newsletter'
import { Path } from './path'
import { Picture } from './picture'
import { Comments } from '../../components/comments'
import { Content } from './content'
import { Aside } from './aside'

interface PostDetailsProps {
  post: PostModel
  topPosts: PostPreviewModel[]
}

export function PostDetails({ post, topPosts }: PostDetailsProps) {
  return (
    <div className="h-full bg-surface-seconday pt-[7rem]">
      <div className="mx-auto w-full max-w-body">
        <Path title={post.title} />
        <div className="mt-3 flex flex-col gap-14 lg:flex-row">
          <article className="mb-28 w-full bg-white lg:w-3/4">
            <Picture {...post} />
            <Content html={post.content} />
            <Author />
            <Comments />
            <Newsletter />
          </article>

          <Aside topPosts={topPosts} />
        </div>
      </div>
    </div>
  )
}
