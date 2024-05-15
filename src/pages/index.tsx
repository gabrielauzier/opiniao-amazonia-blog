import Head from 'next/head'

import { MainLayout } from '@/common/presentation/components/layouts/main.layout'

import { MostWatchedPostsThisWeek } from '@/blog/posts/presentation/components/most-watched/most-watched-posts-this-week'
import { PostsHighlights } from '@/blog/posts/presentation/components/highlights/posts-highlights'

export default function HomePage() {
  return (
    <MainLayout>
      <Head>
        <title>Opinião Amazônia • Posts</title>
      </Head>

      <div className="space-y-12">
        <PostsHighlights />
        <MostWatchedPostsThisWeek />
      </div>
    </MainLayout>
  )
}
