import { AbstractLoggerService } from '@/common/data/adapters'
import {
  AbstractSubscribeNewsletterUsecase,
  ISubscribeNewsletter,
} from '../domain/usecases'
import { delay } from '@/common/utils'

export class FakeSubscribeNewsletterUsecase
  implements AbstractSubscribeNewsletterUsecase
{
  constructor(private logger: AbstractLoggerService) {}

  async execute(
    params: ISubscribeNewsletter.Params,
  ): Promise<ISubscribeNewsletter.Result> {
    try {
      this.logger.info('FakeSubscribeNewsletterUsecase: start command', {
        extra: params,
      })
      await delay()

      this.logger.info('FakeSubscribeNewsletterUsecase: completed successfully')
      return {
        confirmationEmailSent: true,
      }
    } catch (error) {
      this.logger.info('FakeSubscribeNewsletterUsecase: ', { extra: error })
      throw error
    }
  }
}
