import { AbstractLoggerService } from '@/common/data/adapters'
import {
  AbstractGetOnePostUsecase,
  AbstractPostsRepository,
  IGetOnePost,
} from '../../domain'

export class GetOnePostUsecase implements AbstractGetOnePostUsecase {
  constructor(
    private postsRepository: AbstractPostsRepository,
    private logger: AbstractLoggerService,
  ) {}

  async execute(params?: IGetOnePost.Params): Promise<IGetOnePost.Result> {
    try {
      this.logger.info('GetOnePostUsecase: start command', { extra: params })
      const result = await this.postsRepository.getOnePost(params)

      this.logger.info('GetOnePostUsecase: completed sucessfully')
      return result
    } catch (error) {
      this.logger.error('GetOnePostUsecase: ', { extra: error })
      throw error
    }
  }
}
