import { Post } from '@/blog/posts/domain/models/post'
import { Badge } from '@/common/presentation/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

interface PostListItemProps {
  post: Post
}

export function PostListItem({ post }: PostListItemProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="flex gap-6 hover:text-green-800"
    >
      <div className="flex flex-col">
        <Badge className="w-fit">{post.categories[0]}</Badge>

        <div className="mb-2 mt-1">
          <strong className="text-lg">{post.title}</strong>
        </div>

        <p className="line-clamp-5">{post.excerpt}</p>
      </div>
      <Image
        src={post.imgUrl}
        width={256}
        height={128}
        alt=""
        priority
        className="h-48 object-cover object-top opacity-90"
      />
    </Link>
  )
}
