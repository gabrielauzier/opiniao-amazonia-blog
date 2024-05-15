import { ComponentProps } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/common/presentation/components/ui/carousel'
import { PostCarouselHighlight } from './post-carousel-highlight'

type PostsCarouselProps = ComponentProps<'div'>

export function PostsCarousel({ ...props }: PostsCarouselProps) {
  return (
    <Carousel className={props.className}>
      <CarouselContent className="h-[32rem]">
        <CarouselItem>
          <PostCarouselHighlight
            imgUrl="/example2.jpg"
            title="A comunidade internacional e a Amazônia: Entre a cobrança e a ajuda"
          />
        </CarouselItem>
        <CarouselItem>
          <PostCarouselHighlight
            imgUrl="/example1.jpg"
            title="Eleições 2024: o que queremos para a Amazônia?"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
