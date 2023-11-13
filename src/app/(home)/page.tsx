import { makePostsUsecases } from '@/main/factories/usecases'
import { Home } from '@/presentation/pages/home'

export default async function HomePage() {
  const { getAllPostsCommand } = makePostsUsecases()
  const { posts } = await getAllPostsCommand.execute()

  return <Home posts={posts} />
}
