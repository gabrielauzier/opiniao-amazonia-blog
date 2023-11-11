import { getAllPosts } from '@/presentation/hooks/use-posts'
import { Posts } from '@/presentation/pages/posts'

export default async function PostsPage() {
  const { posts } = await getAllPosts({ limit: 10 })

  return <Posts posts={posts} />
}
