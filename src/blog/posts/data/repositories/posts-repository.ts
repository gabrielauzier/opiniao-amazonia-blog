import { Post } from '@/blog/posts/domain/models/post'

export abstract class PostsRepository {
  abstract findMany(): Promise<Post[]>

  abstract findById(id: string): Promise<Post | null>
  abstract findPostWithContentById(id: string): Promise<Post | null>
}
