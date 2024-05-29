import Head from 'next/head'
import { GetStaticProps } from 'next'

import { MainLayout } from '@/common/presentation/components/layouts/main.layout'
import { ContactBanner } from '@/common/presentation/components/home/contact-banner'

import { makeFindManyPosts } from '@/blog/posts/presentation/factories/posts-usecases.factory'
import { MostWatchedPostsThisWeek } from '@/blog/posts/presentation/components/most-watched/most-watched-posts-this-week'
import { PostsHighlights } from '@/blog/posts/presentation/components/highlights/posts-highlights'
import { Post } from '@/blog/posts/domain/models/post'

interface HomePageProps {
  posts: Post[]
}

export const getStaticProps = (async () => {
  const posts = await makeFindManyPosts().execute()

  return { props: { posts } }
}) satisfies GetStaticProps<HomePageProps>

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Opinião Amazônia • Início</title>
      </Head>
      <MainLayout>
        <div className="space-y-12">
          <PostsHighlights posts={posts} />
          <MostWatchedPostsThisWeek posts={posts} />
          <ContactBanner />
        </div>
      </MainLayout>
    </>
  )
}
