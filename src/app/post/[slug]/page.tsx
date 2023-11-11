import { getAllPosts, getSinglePost } from '@/presentation/hooks/use-posts'
import { PostDetails } from '@/presentation/pages/post-details'

interface PostPageProps {
  params: { slug: string }
}

export default async function PostPage({ params }: PostPageProps) {
  const { post } = await getSinglePost({ slug: params.slug })
  const { posts } = await getAllPosts({ limit: 4 })

  return <PostDetails post={post} topPosts={posts} />
}

export async function generateStaticParams() {
  const { posts } = await getAllPosts({ limit: 10 })

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const {
    post: { title },
  } = await getSinglePost({ slug })
  return {
    title,
  }
}
