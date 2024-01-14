import { AbstractPostsRepository } from '../../domain'
import { PrismicPostsRepository } from '../../infra'

export const makePrismicPostsRepository = (): AbstractPostsRepository =>
  new PrismicPostsRepository()
