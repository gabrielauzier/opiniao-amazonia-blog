import { PostPreview } from '@/presentation/pages/posts/PostPreview'

export function PostList() {
  return (
    <section className="mx-auto mt-0 max-w-[28rem]   px-5 lg:max-w-body lg:px-0">
      <div className="mb-5">
        <h2 className="text-xl font-light text-zinc-800">Mais recentes</h2>
        <span className="text-sm text-zinc-600">
          Confira as últimas publicações
        </span>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <PostPreview
          title="Integer Maecenas Eget Viverra"
          date="28 de julho, 2023"
          excerpt="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
          categories={['Política', 'Cultura']}
          imgUrl="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg"
        />
        <PostPreview
          title="Aenean eleifend ante maecenas"
          date="26 de julho, 2023"
          excerpt="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
          categories={['Política', 'Cultura']}
          imgUrl="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <PostPreview
          title="Integer Maecenas Eget Viverra"
          date="25 de julho, 2023"
          excerpt="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
          categories={['Política', 'Brasília']}
          imgUrl="https://images.pexels.com/photos/5721097/pexels-photo-5721097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <PostPreview
          title="Integer Maecenas Eget Viverra"
          date="25 de julho, 2023"
          excerpt="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
          categories={['Manaus', 'Cultura']}
          imgUrl="https://images.pexels.com/photos/7903925/pexels-photo-7903925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <PostPreview
          title="Integer Maecenas Eget Viverra"
          date="25 de julho, 2023"
          excerpt="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
          categories={['Política', 'Cultura']}
          imgUrl="https://images.pexels.com/photos/13809881/pexels-photo-13809881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <PostPreview
          title="Integer Maecenas Eget Viverra"
          date="25 de julho, 2023"
          excerpt="Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem."
          categories={['Política', 'Cultura']}
          imgUrl="https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>

      <div className="flex w-full items-center justify-center">
        <button className="my-14 rounded-sm border border-zinc-700 px-10 py-4 text-zinc-700 shadow-md hover:bg-zinc-100">
          Carregar mais
        </button>
      </div>
    </section>
  )
}
