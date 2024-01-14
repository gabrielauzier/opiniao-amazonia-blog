import { makePostsUsecases } from '@/main/factories/usecases'
import { PostDetails } from '@/presentation/pages/post-details'

interface PostPageProps {
  params: { slug: string }
}

export default async function PostPage({ params }: PostPageProps) {
  const { getAllPostsCommand, getPostByIDCommand } = makePostsUsecases()

  const { posts } = await getAllPostsCommand.execute()
  const { post } = await getPostByIDCommand.execute({ id: params.slug })

  return <PostDetails post={post} topPosts={posts} />
}

export async function generateStaticParams() {
  const { getAllPostsCommand } = makePostsUsecases()
  const { posts } = await getAllPostsCommand.execute()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  // const {
  //   post: { title },
  // } = await getSinglePost({ slug })

  const { getPostByIDCommand } = makePostsUsecases()
  const { post } = await getPostByIDCommand.execute({ id: slug })
  return { title: post.title }
}
