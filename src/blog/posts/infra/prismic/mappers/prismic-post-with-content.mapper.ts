import * as prismicH from '@prismicio/helpers'

import { PostDocument } from '../../../../../../prismicio-types'
import { PostWithContent } from '@/blog/posts/domain/models/post-with-content'

export class PrismicPostWithContentMapper {
  static toDomain(raw: PostDocument): PostWithContent {
    return {
      id: raw.uid.toString(),
      slug: raw.uid.toString(),
      title: raw.data.title ?? '',
      author: 'Gabriel Auzier',
      categories: raw.tags,
      date: raw.first_publication_date,
      excerpt: prismicH.asText(raw.data.content),
      content: prismicH.asHTML(raw.data.content),
      imgUrl: raw.data.image.url ?? '',
    }
  }
}