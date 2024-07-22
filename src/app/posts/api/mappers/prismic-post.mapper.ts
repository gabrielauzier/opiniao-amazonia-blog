import * as prismicH from '@prismicio/helpers'

import { PostDocument } from '#root/prismicio-types'
import { Post } from '../../model/post'

export class PrismicPostMapper {
  static toDomain(raw: PostDocument): Post {
    return {
      id: raw.uid.toString(),
      slug: raw.uid.toString(),
      title: raw.data.title ?? '',
      author: 'Gabriel Auzier',
      categories: raw.tags.length === 0 ? ['Economia'] : raw.tags,
      date: raw.first_publication_date,
      content: prismicH.asHTML(raw.data.content),
      excerpt: prismicH.asText(raw.data.content).substring(0, 300 * 3),
      imgUrl: raw.data.image.url ?? '',
    }
  }
}
