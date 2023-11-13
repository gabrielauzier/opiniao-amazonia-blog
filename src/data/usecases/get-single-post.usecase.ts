import { AbstractPostsProvider } from '@/domain/adapters'
import { UnexpectedError } from '@/domain/errors'
import { AbstractGetSinglePostUsecase, GetSinglePost } from '@/domain/usecases'

export class GetSinglePostUsecase implements AbstractGetSinglePostUsecase {
  constructor(private postsProvider: AbstractPostsProvider) {}

  async execute({ id }: GetSinglePost.Params): Promise<GetSinglePost.Result> {
    try {
      return await this.postsProvider.getPostByID({ id })
    } catch (error) {
      throw new UnexpectedError()
    }
  }
}
