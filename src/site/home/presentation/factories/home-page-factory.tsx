import { makeGetAllPostsUsecase } from '@/site/posts/presentation/factories'
import { Home } from '../pages/home'

export const makeHomePage = () => <Home getPosts={makeGetAllPostsUsecase()} />
