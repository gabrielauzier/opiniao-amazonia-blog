import { Input } from '@/presentation/components/Form/Input'
import { PostPreview } from '@/presentation/components/Posts/PostPreview'
import { Search } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <Input.Root>
        <Input.Prefix>
          <Search />
        </Input.Prefix>
        <Input.Control placeholder="Buscar conteúdo" />
      </Input.Root>
      <div className="mt-16 pb-8">
        <h1 className="mb-5 text-3xl font-bold">Últimas postagens</h1>

        <div className="flex flex-col gap-8 divide-y-2">
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
        </div>
      </div>
    </div>
  )
}
