import { GetAllPostsUsecase, GetSinglePostUsecase } from "@/data/usecases"
import { PrismicPostsProvider } from "@/infra"

export function makePostsUsecases() {
  const prismicPostsProvider = new PrismicPostsProvider()

  return {
    getAllPostsCommand: new GetAllPostsUsecase(prismicPostsProvider),
    getPostByIDCommand: new GetSinglePostUsecase(prismicPostsProvider)
  }
}