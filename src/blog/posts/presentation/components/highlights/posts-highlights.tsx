import { PostsCarousel } from '../carousel/posts-carousel'
import { PostHighlight } from './post-highlight'

export function PostsHighlights() {
  return (
    <div className="grid grid-cols-4">
      <PostsCarousel className="col-span-2"></PostsCarousel>

      <div className="col-span-2 ml-4 grid grid-cols-2 gap-4">
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
        />
        <PostHighlight
          imgUrl="/example1.jpg"
          title="Eleições 2024: o que queremos para a Amazônia?"
        />
      </div>
    </div>
  )
}
