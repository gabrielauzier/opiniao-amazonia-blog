import { AbstractGetAllPostsUsecase } from '../../domain'
import { PostList } from '../components'

interface PostsProps {
  getPosts: AbstractGetAllPostsUsecase
}

export async function Posts({ getPosts }: PostsProps) {
  const { posts } = await getPosts.execute()

  return (
    <div className="mt-[7rem]">
      <PostList posts={posts} />
    </div>
  )
}
