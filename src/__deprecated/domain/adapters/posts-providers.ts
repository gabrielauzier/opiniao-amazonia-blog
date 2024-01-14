import { GetAllPosts, GetSinglePost } from '../usecases'

export interface AbstractPostsProvider {
  getAllPosts(params: GetAllPosts.Params): Promise<GetAllPosts.Result>
  getPostByID(params: GetSinglePost.Params): Promise<GetSinglePost.Result>
}
