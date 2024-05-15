import { Post } from '@/blog/posts/domain/models/post'
import { PostsRepository } from '../repositories/posts-repository'

export class FindManyPostsUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute(): Promise<Post[]> {
    return await this.postsRepository.findMany()
  }
}
