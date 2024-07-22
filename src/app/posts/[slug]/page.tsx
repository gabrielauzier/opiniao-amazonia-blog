import { PostDetails } from '@/website/posts/presentation/pages'
import { getAllPosts } from '../api/get-all-posts'
import { getPostBySlug } from '../api/get-post-by-slug'

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostDetailsPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return null
  }

  return <PostDetails post={post} topPosts={[]} />
}
