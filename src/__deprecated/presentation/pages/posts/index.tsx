'use client'

import { PostList } from '../home/sections/PostList'
import { PostPreviewModel } from '@/domain/models'

interface PostsProps {
  posts: PostPreviewModel[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <div className="mt-[7rem]">
      <PostList posts={posts} />
    </div>
  )
}
