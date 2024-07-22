'use server'

import { prismicClient } from './client'
import { PrismicPostMapper } from './mappers/prismic-post.mapper'

export async function getPostBySlug(slug: string) {
  const post = await prismicClient.getByUID('post', slug)

  if (!post) {
    return null
  }

  return PrismicPostMapper.toDomain(post)
}
