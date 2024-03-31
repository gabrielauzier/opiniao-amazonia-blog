import { MainLayout } from '@/common/presentation/components/layouts/main.layout'

import Head from 'next/head'
import { Highlights } from './highlights'
import { Recents } from './recents'

export default function Page() {
  return (
    <MainLayout>
      <Head>
        <title>Opinião Amazônia • Posts</title>
      </Head>

      <div className="space-y-12">
        <Highlights />

        <Recents />
      </div>
    </MainLayout>
  )
}
