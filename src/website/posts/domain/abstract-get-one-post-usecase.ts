import { PostModel } from './post-model'

export namespace IGetOnePost {
  export interface Params {
    id: string
    title?: string
  }
  export interface Result {
    post: PostModel
  }
}

export interface AbstractGetOnePostUsecase {
  execute(params?: IGetOnePost.Params): Promise<IGetOnePost.Result>
}
