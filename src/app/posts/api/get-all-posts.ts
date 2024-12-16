'use server'

import { PrismicPostMapper } from '@/blog/posts/infra/prismic/mappers/prismic-post.mapper'
import { prismicClient } from './client'

export async function getAllPosts() {
  const posts = await prismicClient.getAllByType('post', {
    orderings: ['document.first_publication_date desc'],
  })

  return posts.map(PrismicPostMapper.toDomain)
}
