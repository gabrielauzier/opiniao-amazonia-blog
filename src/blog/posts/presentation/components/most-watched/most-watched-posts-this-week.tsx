import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Separator } from '@/common/presentation/components/ui/separator'
import { PostPreview } from '../preview/post-preview'

export function MostWatchedPostsThisWeek() {
  return (
    <section className="flex flex-col gap-3">
      <Separator />

      <div className="flex justify-between">
        <h2 className="font-semibold">Mais lidos da semana</h2>
        <Link
          className="flex items-center gap-1 font-semibold hover:text-primary"
          href=""
        >
          Ver tudo
          <ArrowRight className="h-4 w-4"></ArrowRight>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <PostPreview
          categories={['Cultura']}
          date="12/10/2023"
          excerpt="Lorem ipsum"
          imgUrl="/manaus.jpg"
          slug="post1"
          title=" A Amazônia: Um patrimônio da humanidade que precisa ser protegido"
        />

        <PostPreview
          categories={['Cultura']}
          date="12/10/2023"
          excerpt="Lorem ipsum"
          imgUrl="/example1.jpg"
          slug="post1"
          title="O futuro da Amazônia: Entre o desenvolvimento e a preservação"
        />

        <PostPreview
          categories={['Cultura']}
          date="12/10/2023"
          excerpt="Lorem ipsum"
          imgUrl="/example1.jpg"
          slug="post1"
          title="O futuro da Amazônia: Entre o desenvolvimento e a preservação"
        />

        <PostPreview
          categories={['Cultura']}
          date="12/10/2023"
          excerpt="Lorem ipsum"
          imgUrl="/example1.jpg"
          slug="post1"
          title="O futuro da Amazônia: Entre o desenvolvimento e a preservação"
        />
      </div>
    </section>
  )
}
