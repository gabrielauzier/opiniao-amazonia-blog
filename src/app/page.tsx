import { PostsList } from '@/blog/posts/presentation/components/listing/posts-list'
import { getAllPosts } from './posts/api/get-all-posts'

export default async function Page() {
  const posts = await getAllPosts()

  return <PostsList posts={posts} />
}
