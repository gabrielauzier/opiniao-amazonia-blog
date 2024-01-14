import { IGetAllPosts } from '../usecases/abstract-get-all-posts-usecase'
import { IGetOnePost } from '../usecases/abstract-get-one-post-usecase'

export interface AbstractPostsRepository {
  getAllPosts(params?: IGetAllPosts.Params): Promise<IGetAllPosts.Result>
  getOnePost(params?: IGetOnePost.Params): Promise<IGetOnePost.Result>
}
