import { MainLayout } from '@/common/presentation/components/layouts/main.layout'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/common/presentation/components/ui/carousel'
import Head from 'next/head'
import { Highlight } from './highlight'

export default function Page() {
  return (
    <MainLayout>
      <Head>
        <title>Opinião Amazônia • Posts</title>
      </Head>

      <Carousel className="rounded-2xl border">
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent className="h-[32rem]">
          <CarouselItem>
            <Highlight
              imgUrl="/example2.jpg"
              title="A comunidade internacional e a Amazônia: Entre a cobrança e a ajuda"
            />
          </CarouselItem>
          <CarouselItem>
            <Highlight
              imgUrl="/example1.jpg"
              title="Eleições 2024: o que queremos para a Amazônia?"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </MainLayout>
  )
}
