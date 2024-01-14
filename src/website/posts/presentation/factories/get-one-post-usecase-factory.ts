import { makeLoggerService } from '@/common/presentation/factories/adapters'

import { GetOnePostUsecase } from '../../data'
import { AbstractGetOnePostUsecase } from '../../domain'
import { makePrismicPostsRepository } from './prismic-posts-repository-factory'

export const makeGetOnePostUsecase = (): AbstractGetOnePostUsecase =>
  new GetOnePostUsecase(makePrismicPostsRepository(), makeLoggerService())
