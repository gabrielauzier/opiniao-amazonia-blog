import {
  makeGetAllPostsUsecase,
  makeGetOnePostUsecase,
  makePostDetailsPage,
} from '@/website/posts/presentation/factories'

interface IPostPage {
  params: { slug: string }
}

export default ({ params }: IPostPage) => makePostDetailsPage(params.slug)

export async function generateStaticParams() {
  const { posts } = await makeGetAllPostsUsecase().execute()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params: { slug } }: IPostPage) {
  const { post } = await makeGetOnePostUsecase().execute({ id: slug })
  return { title: post.title }
}
