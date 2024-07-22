import { makeFindManyPosts } from '@/blog/posts/presentation/factories/posts-usecases.factory'

const findManyPosts = makeFindManyPosts()

export async function getStaticProps() {
  const posts = await findManyPosts.execute()

  return {
    props: {},
  }
}

export default function PostDetailsPage({ slug }: { slug: string }) {
  return (
    <>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
      <h1>{slug}</h1>
    </>
  )
}
