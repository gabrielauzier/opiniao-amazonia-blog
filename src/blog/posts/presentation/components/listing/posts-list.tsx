'use client'

import { Post } from '@/blog/posts/domain/models/post'
import { PostListItem } from './post-list-item'
import { Separator } from '@/common/presentation/components/ui/separator'

interface PostsListProps {
  posts: Post[]
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <section className="mx-auto mt-5 max-w-[1020px]">
      <h1 className="font-semibold">Últimas postagens</h1>
      <div className="my-3">
        <Separator />
      </div>

      <ul className="mt-2 space-y-6">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
