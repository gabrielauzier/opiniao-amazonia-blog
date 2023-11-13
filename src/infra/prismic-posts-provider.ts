import { AbstractPostsProvider } from '@/domain/adapters'
import { GetAllPosts, GetSinglePost } from '@/domain/usecases'
import { createClient } from '@/prismicio'
import * as prismicH from '@prismicio/helpers'

export class PrismicPostsProvider implements AbstractPostsProvider {
  client

  constructor() {
    this.client = createClient({
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    })
  }

  async getAllPosts(): Promise<GetAllPosts.Result> {
    const posts = await this.client.getAllByType('post')

    return {
      posts: posts.map((post) => ({
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

  async getPostByID(
    params: GetSinglePost.Params,
  ): Promise<GetSinglePost.Result> {
    const post = await this.client.getByUID('post', params.id)

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
