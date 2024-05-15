import { Post } from '@/blog/posts/domain/models/post'
import * as prismicH from '@prismicio/helpers'

import { PostDocument } from '../../../../../../prismicio-types'

export class PrismicPostMapper {
  static toDomain(raw: PostDocument): Post {
    return {
      id: raw.uid.toString(),
      slug: raw.uid.toString(),
      title: raw.data.title ?? '',
      author: 'Gabriel Auzier',
      categories: raw.tags,
      date: raw.first_publication_date,
      excerpt: prismicH.asText(raw.data.content),
      imgUrl: raw.data.image.url ?? '',
    }
  }
}
