import { MainLayout } from '@/common/presentation/components/layouts/main.layout'
import { Heading } from '@/common/presentation/components/typography/heading'
import { Text } from '@/common/presentation/components/typography/text'
import { Title } from '@/common/presentation/components/typography/title'
import Head from 'next/head'

export default function Page() {
  return (
    <MainLayout>
      <Head>
        <title>Opinião Amazônia • Equipe </title>
      </Head>

      <Title>Equipe</Title>
      <div className="mt-3 space-y-4">
        <section>
          <Heading className="mb-1.5">Diretor Geral</Heading>
          <Text size="xl">Olavo Auzier</Text>
          <Text>olavoauzier@gmail.com</Text>
        </section>
        <section>
          <Heading className="mb-1.5">Design & Desenvolvimento</Heading>
          <Text size="xl">Gabriel Auzier</Text>
          <Text>gabrielvascoauzier@gmail.com</Text>
        </section>
      </div>
    </MainLayout>
  )
}
