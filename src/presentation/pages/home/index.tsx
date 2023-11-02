import { SocialMediaContainer } from './sections/SocialMediaContainer'
import { TopCategories } from './sections/TopCategories'
import { PostList } from './sections/PostList'
import { Contact } from './sections/Contact'
import { Banner } from './sections/Banner'
import { Footer } from '@/presentation/components/Footer'

export function Home() {
  return (
    <>
      <Banner />
      <SocialMediaContainer />
      <PostList />
      <Contact />
      <TopCategories />
      <Footer />
    </>
  )
}
