import { AbstractPostsRepository, IGetAllPosts, IGetOnePost } from '../domain'

import { createClient } from '@/prismicio'
import { Client } from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import { AllDocumentTypes } from '../../../../prismicio-types'

export class PrismicPostsRepository implements AbstractPostsRepository {
  client: Client<AllDocumentTypes>

  constructor() {
    this.client = createClient({
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    })
  }

  async getAllPosts(): Promise<IGetAllPosts.Result> {
    const result = await this.client.getAllByType('post')

    return {
      posts: result.map((post) => ({
        id: post.uid.toString(),
        slug: post.uid.toString(),
        title: post.data.title ?? '',
        author: 'Gabriel Auzier',
        categories: post.tags,
        date: post.first_publication_date,
        excerpt: prismicH.asText(post.data.content),
        imgUrl: post.data.image.url ?? '',
      })),
    }
  }

  async getOnePost({ id }: IGetOnePost.Params): Promise<IGetOnePost.Result> {
    const post = await this.client.getByUID('post', id)

    return {
      post: {
        id: post.uid.toString(),
        slug: post.uid.toString(),
        title: post.data.title ?? '',
        author: 'Gabriel Auzier',
        categories: post.tags,
        date: post.first_publication_date,
        excerpt: prismicH.asText(post.data.content),
        content: prismicH.asHTML(post.data.content),
        imgUrl: post.data.image.url ?? '',
      },
    }
  }
}
