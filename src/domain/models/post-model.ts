export interface PostModel {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  categories: string[]
  imgUrl: string
  author: string
}

export type PostPreviewModel = Omit<PostModel, 'content'>
