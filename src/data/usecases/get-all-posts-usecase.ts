import { AbstractPostsProvider } from "@/domain/adapters";
import { UnexpectedError } from "@/domain/errors";
import { AbstractGetAllPostsUsecase, GetAllPosts } from "@/domain/usecases";

export class GetAllPostsUsecase implements AbstractGetAllPostsUsecase {
  constructor (private postsProvider: AbstractPostsProvider) {}
  
  async execute(params?: GetAllPosts.Params): Promise<GetAllPosts.Result> {
    try {
      return await this.postsProvider.getAllPosts({})
    } catch (error) {
      throw new UnexpectedError()
    }
  }
}