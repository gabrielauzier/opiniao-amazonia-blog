import { Post } from '@/blog/posts/domain/models/post'
import { PostsCarousel } from '../carousel/posts-carousel'
import { PostHighlight } from './post-highlight'

interface PostsHighlightsProps {
  posts: Post[]
}

export function PostsHighlights({ posts }: PostsHighlightsProps) {
  return (
    <div className="grid grid-cols-4">
      <PostsCarousel className="col-span-2" />

      <div className="col-span-2 ml-4 grid grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostHighlight
            key={post.id}
            imgUrl={post.imgUrl}
            title={post.title}
          />
        ))}
        {/* <PostHighlight
          imgUrl="/example1.jpg"
          title="Eleições 2024: o que queremos para a Amazônia?"
        />
        <PostHighlight
          imgUrl="/example1.jpg"
          title="Eleições 2024: o que queremos para a Amazônia?"
        />
        <PostHighlight
          imgUrl="/example1.jpg"
          title="Eleições 2024: o que queremos para a Amazônia?"
        />
        <PostHighlight
          imgUrl="/example1.jpg"
          title="Eleições 2024: o que queremos para a Amazônia?"
        /> */}
      </div>
    </div>
  )
}
