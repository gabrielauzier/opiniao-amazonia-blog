import { PostPreviewModel } from './post-preview-model'

export namespace IGetAllPosts {
  export interface Params {
    limit?: number
    sortBy?: 'ascending' | 'descending'
  }
  export interface Result {
    posts: PostPreviewModel[]
  }
}

export interface AbstractGetAllPostsUsecase {
  execute(params?: IGetAllPosts.Params): Promise<IGetAllPosts.Result>
}
