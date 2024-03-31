import { MainLayout } from '@/common/presentation/components/layouts/main.layout'
import { Title } from '@/common/presentation/components/typography/title'
import Head from 'next/head'

export default function Page() {
  return (
    <MainLayout>
      <Head>
        <title>Opinião Amazônia • Leitor</title>
      </Head>
      <Title>Leitor</Title>
      <p>Página do leitor</p>
    </MainLayout>
  )
}
