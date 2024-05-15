import { createClient } from '@/prismicio'
import { Client } from '@prismicio/client'

import { AllDocumentTypes } from '#root/prismicio-types'

import { PostsRepository } from '@/blog/posts/data/repositories/posts-repository'
import { Post } from '@/blog/posts/domain/models/post'

import { PrismicPostWithContentMapper } from '../mappers/prismic-post-with-content.mapper'
import { PrismicPostMapper } from '../mappers/prismic-post.mapper'

export class PrismicPostsRepository implements PostsRepository {
  client: Client<AllDocumentTypes>

  constructor() {
    this.client = createClient({
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    })
  }

  async findMany(): Promise<Post[]> {
    const posts = await this.client.getAllByType('post')

    return posts.map(PrismicPostMapper.toDomain)
  }

  async findById(id: string): Promise<Post | null> {
    const post = await this.client.getByUID('post', id)

    if (!post) {
      return null
    }

    return PrismicPostMapper.toDomain(post)
  }

  async findPostWithContentById(id: string): Promise<Post | null> {
    const post = await this.client.getByUID('post', id)

    if (!post) {
      return null
    }

    return PrismicPostWithContentMapper.toDomain(post)
  }
}
