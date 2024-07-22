import Head from 'next/head'
import { GetStaticProps } from 'next'

import { MainLayout } from '@/common/presentation/components/layouts/main.layout'

import { makeFindManyPosts } from '@/blog/posts/presentation/factories/posts-usecases.factory'
import { PostsList } from '@/blog/posts/presentation/components/listing/posts-list'
import { Post } from '@/blog/posts/domain/models/post'

interface PostsPageProps {
  posts: Post[]
}

export const getStaticProps = (async () => {
  const posts = await makeFindManyPosts().execute()

  return { props: { posts } }
}) satisfies GetStaticProps<PostsPageProps>

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Opinião Amazônia • Início</title>
      </Head>
      <MainLayout>
        <PostsList posts={posts} />
      </MainLayout>
    </>
  )
}
