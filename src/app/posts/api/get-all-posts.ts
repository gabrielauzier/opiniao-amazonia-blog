'use server'

import { PrismicPostMapper } from '@/blog/posts/infra/prismic/mappers/prismic-post.mapper'
import { prismicClient } from './client'

export async function getAllPosts() {
  const posts = await prismicClient.getAllByType('post')

  return posts.map(PrismicPostMapper.toDomain)
}
