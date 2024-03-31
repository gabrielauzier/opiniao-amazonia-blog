import { AbstractLoggerService } from '@/common/data/adapters'
import {
  AbstractGetAllPostsUsecase,
  AbstractPostsRepository,
  IGetAllPosts,
} from '../../domain'

export class GetAllPostsUsecase implements AbstractGetAllPostsUsecase {
  constructor(
    private postsRepository: AbstractPostsRepository,
    private logger: AbstractLoggerService,
  ) {}

  async execute(params?: IGetAllPosts.Params): Promise<IGetAllPosts.Result> {
    try {
      this.logger.info('GetAllPostsUsecase: start command')
      const result = await this.postsRepository.getAllPosts(params)

      this.logger.info('GetAllPostsUsecase: completed sucessfully')
      return result
    } catch (error) {
      this.logger.error('GetAllPostsUsecase: ', { extra: error })
      throw error
    }
  }
}
