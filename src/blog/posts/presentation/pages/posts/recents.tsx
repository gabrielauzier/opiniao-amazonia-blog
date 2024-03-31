import { Heading } from '@/common/presentation/components/typography/heading'
import { Title } from '@/common/presentation/components/typography/title'
import { Preview } from './preview'

export function Recents() {
  return (
    <section className="flex flex-col gap-3">
      <Title>Últimas matérias</Title>

      <div className="grid grid-cols-3 gap-10">
        <Preview
          categories={['Cultura']}
          date="12/10/2023"
          excerpt="Lorem ipsum"
          imgUrl="/manaus.jpg"
          slug="post1"
          title=" A Amazônia: Um patrimônio da humanidade que precisa ser protegido"
        />

        <Preview
          categories={['Cultura']}
          date="12/10/2023"
          excerpt="Lorem ipsum"
          imgUrl="/example1.jpg"
          slug="post1"
          title="O futuro da Amazônia: Entre o desenvolvimento e a preservação"
        />

        <Preview
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
