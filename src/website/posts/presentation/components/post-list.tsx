import { PostPreviewModel } from '../../domain'
import { PostPreview } from './post-preview'

interface PostListProps {
  posts: PostPreviewModel[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <section className="mx-auto mt-0 max-w-[28rem]   px-5 lg:max-w-body lg:px-0">
      <div className="mb-5">
        <h2 className="text-xl font-light text-zinc-800">Mais recentes</h2>
        <span className="text-sm text-zinc-600">
          Confira as últimas publicações
        </span>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            categories={post.categories}
            imgUrl={post.imgUrl}
            slug={post.slug}
          />
        ))}
      </div>

      <div className="flex w-full items-center justify-center">
        <button className="my-14 rounded-sm border border-zinc-700 px-10 py-4 text-zinc-700 shadow-md hover:bg-zinc-100">
          Carregar mais
        </button>
      </div>
    </section>
  )
}
