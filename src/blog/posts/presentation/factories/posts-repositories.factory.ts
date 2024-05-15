import { PrismicPostsRepository } from '@/blog/posts/infra/prismic/repositories/prismic-posts-repository'

export const makePrismicPostsRepository = () => new PrismicPostsRepository()
