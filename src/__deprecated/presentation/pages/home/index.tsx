import { SocialMediaContainer } from './sections/SocialMediaContainer'
import { TopCategories } from './sections/TopCategories'
import { PostList } from './sections/PostList'
import { Contact } from './sections/Contact'
import { Banner } from './sections/Banner'
import { PostPreviewModel } from '@/domain/models'

interface HomeProps {
  posts: PostPreviewModel[]
}

export function Home({ posts }: HomeProps) {
  return (
    <>
      <Banner />
      <SocialMediaContainer />
      <PostList posts={posts} />
      <Contact />
      <TopCategories />
    </>
  )
}
