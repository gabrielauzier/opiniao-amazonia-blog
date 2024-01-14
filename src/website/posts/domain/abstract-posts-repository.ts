import { IGetAllPosts } from './abstract-get-all-posts-usecase'
import { IGetOnePost } from './abstract-get-one-post-usecase'

export interface AbstractPostsRepository {
  getAllPosts(params?: IGetAllPosts.Params): Promise<IGetAllPosts.Result>
  getOnePost(params?: IGetOnePost.Params): Promise<IGetOnePost.Result>
}
