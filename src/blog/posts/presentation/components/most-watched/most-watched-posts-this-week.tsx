import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Separator } from '@/common/presentation/components/ui/separator'

import { Post } from '@/blog/posts/domain/models/post'
import { PostPreview } from '../preview/post-preview'

interface MostWatchedPostsThisWeekProps {
  posts: Post[]
}

export function MostWatchedPostsThisWeek({
  posts,
}: MostWatchedPostsThisWeekProps) {
  return (
    <section className="flex flex-col gap-3">
      <Separator />

      <div className="flex justify-between">
        <h2 className="font-semibold">Mais lidos da semana</h2>
        <Link
          className="flex items-center gap-1 font-semibold hover:text-primary"
          href=""
        >
          Ver tudo
          <ArrowRight className="h-4 w-4"></ArrowRight>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostPreview
            categories={post.categories}
            date={post.date.toString()}
            excerpt={post.excerpt}
            imgUrl={post.imgUrl}
            slug={post.slug}
            title={post.title}
            key={post.id}
          />
        ))}
      </div>
    </section>
  )
}
