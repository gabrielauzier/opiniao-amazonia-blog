import { AuthorModel } from '../models/author-model'
import { CommentModel } from '../models/comment-model'
import { PostModel } from '../models/post-model'

export namespace IGetOnePost {
  export interface Params {
    id: string
    title?: string
  }
  export interface Result {
    post: PostModel
    author?: AuthorModel
    comments: CommentModel[]
  }
}

export interface AbstractGetOnePostUsecase {
  execute(params?: IGetOnePost.Params): Promise<IGetOnePost.Result>
}
