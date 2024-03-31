import {
  makeGetAllPostsUsecase,
  makeGetOnePostUsecase,
} from '@/website/posts/presentation/factories'
import { PostDetails } from '../pages/post-details'

export async function makePostDetailsPage(id: string) {
  const { posts } = await makeGetAllPostsUsecase().execute()
  const { post } = await makeGetOnePostUsecase().execute({ id })

  return <PostDetails post={post} topPosts={posts} />
}
