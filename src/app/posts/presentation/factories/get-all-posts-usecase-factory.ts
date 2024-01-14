import { makeLoggerService } from '@/common/presentation/factories/adapters'

import { GetAllPostsUsecase } from '../../data'
import { AbstractGetAllPostsUsecase } from '../../domain'
import { makePrismicPostsRepository } from './prismic-posts-repository-factory'

export const makeGetAllPostsUsecase = (): AbstractGetAllPostsUsecase =>
  new GetAllPostsUsecase(makePrismicPostsRepository(), makeLoggerService())
