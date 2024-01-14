import { makeGetAllPostsUsecase } from '@/site/posts/presentation/factories'
import { Posts } from '../pages'

export const makePostsPage = () => <Posts getPosts={makeGetAllPostsUsecase()} />
