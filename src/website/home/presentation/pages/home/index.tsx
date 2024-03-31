import { SocialMediaContainer } from './sections/social-media-container'
import { Contact } from './sections/contact'
import { Banner } from './sections/banner'

import { AbstractGetAllPostsUsecase } from '@/website/posts/domain'
import { FeaturedCategories } from '@/website/categories/presentation/components'
import { PostList } from '@/website/posts/presentation/components'

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

      <FeaturedCategories.Root>
        <FeaturedCategories.Heading />
        <FeaturedCategories.List>
          <FeaturedCategories.Item className="bg-categories-culture">
            Cultura
          </FeaturedCategories.Item>
          <FeaturedCategories.Item className="bg-categories-policy">
            Política
          </FeaturedCategories.Item>
          <FeaturedCategories.Item className="bg-categories-economy">
            Economia
          </FeaturedCategories.Item>
          <FeaturedCategories.Item className="bg-categories-business">
            Negócios
          </FeaturedCategories.Item>
          <FeaturedCategories.Item className="bg-categories-manaus">
            Manaus
          </FeaturedCategories.Item>
        </FeaturedCategories.List>
      </FeaturedCategories.Root>
    </>
  )
}
