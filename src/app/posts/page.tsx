import { makePostsUsecases } from '@/main/factories/usecases'
import { Posts } from '@/presentation/pages/posts'

export default async function PostsPage() {
  const { getAllPostsCommand } = makePostsUsecases()
  const { posts } = await getAllPostsCommand.execute()

  return <Posts posts={posts} />
}
