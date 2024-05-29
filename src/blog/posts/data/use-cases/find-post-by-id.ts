import { Post } from '@/blog/posts/domain/models/post'
import { PostsRepository } from '../repositories/posts-repository'

export class FindPostByIdUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute(postId: string): Promise<Post | null> {
    return await this.postsRepository.findById(postId)
  }
}
