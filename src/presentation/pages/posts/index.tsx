'use client'

import { PostList } from '../home/sections/PostList'
import { PostModel } from '@/domain/models'

interface PostsProps {
  posts: PostModel[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <div className="mt-[7rem]">
      <PostList posts={posts} />
    </div>
  )
}
