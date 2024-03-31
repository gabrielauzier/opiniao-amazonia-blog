import { PostPreviewModel } from '@/website/posts/domain'
import Image from 'next/image'

interface FeaturedPostsProps {
  posts: PostPreviewModel[]
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <div className="flex w-full flex-col gap-6">
      {posts.map((post) => (
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
  )
}
