import { MainLayout } from '@/common/presentation/components/layouts/main.layout'
import { Heading } from '@/common/presentation/components/typography/heading'
import { Text } from '@/common/presentation/components/typography/text'
import { Title } from '@/common/presentation/components/typography/title'
import Head from 'next/head'

export default function Page() {
  return (
    <MainLayout>
      <Head>
        <title>Opinião Amazônia • Comercial</title>
      </Head>

      <Title>Comercial</Title>
      <div className="mt-3 space-y-4">
        <section>
          <Heading className="mb-1.5">Orçamentos</Heading>
          <Text>Receba no seu Whatsapp, cotação de preços no Mídia Kit</Text>
          <Text>(99) 99999-9999</Text>
          <Text className="text-green-600">
            comercial@opiniaoamazonia.com.br
          </Text>
        </section>
        <section>
          <Heading className="mb-1.5">Conteúdo</Heading>
          <Text>
            Para utilização do conteúdo da Opinião Amazônia, fazer contato:
          </Text>
          <Text className="text-green-600">
            redatores@opiniaoamazonia.com.br
          </Text>
          <Text className="text-green-600">
            jornalistas@opiniaoamazonia.com.br
          </Text>
        </section>
      </div>
    </MainLayout>
  )
}
