import { PostPreviewModel } from '../models'

export namespace GetAllPosts {
  export interface Params {
    limit?: number
  }
  export interface Result {
    posts: PostPreviewModel[]
  }
}

export interface AbstractGetAllPostsUsecase {
  execute(params?: GetAllPosts.Params): Promise<GetAllPosts.Result>
}
