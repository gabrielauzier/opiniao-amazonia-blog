import { PostModel } from "../models";

export namespace GetSinglePost {
  export interface Params {
    id: string
  }
  export interface Result {
    post: PostModel
  }
}

export interface AbstractGetSinglePostUsecase {
  execute(params: GetSinglePost.Params): Promise<GetSinglePost.Result>
}