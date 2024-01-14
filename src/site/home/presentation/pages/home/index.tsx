import { SocialMediaContainer } from './sections/social-media-container'
import { TopCategories } from './sections/top-categories'
import { Contact } from './sections/contact'
import { Banner } from './sections/banner'

import { AbstractGetAllPostsUsecase } from '@/site/posts/domain'
import { PostList } from '@/site/posts/presentation/components'

interface HomeProps {
  getPosts: AbstractGetAllPostsUsecase
}

export async function Home({ getPosts }: HomeProps) {
  const { posts } = await getPosts.execute()

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
