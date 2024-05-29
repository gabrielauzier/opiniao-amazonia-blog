import { FindManyPostsUseCase } from '@/blog/posts/data/use-cases/find-many-posts'
import { makePrismicPostsRepository } from './posts-repositories.factory'
import { FindPostByIdUseCase } from '../../data/use-cases/find-post-by-id'

export const makeFindManyPosts = () =>
  new FindManyPostsUseCase(makePrismicPostsRepository())

export const makeFindPostById = () =>
  new FindPostByIdUseCase(makePrismicPostsRepository())
