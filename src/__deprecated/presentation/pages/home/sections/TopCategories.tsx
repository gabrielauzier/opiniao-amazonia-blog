export function TopCategories() {
  return (
    <section className="mx-auto mb-14 mt-0 max-w-[28rem] px-5 lg:mb-28 lg:max-w-body lg:px-0">
      <div className="mb-5">
        <h2 className="text-xl font-light text-zinc-800">Top Categorias</h2>
        <span className="text-sm text-zinc-600">
          Confira nossas categorias mais acessadas
        </span>
      </div>
      <div className="mx-auto grid max-w-[28rem] gap-10 lg:max-w-full lg:grid-cols-5">
        <div className="z-10 flex h-40 w-full items-center justify-center rounded-sm border border-zinc-300 bg-categories-culture bg-cover shadow-sm">
          <span className="text-medium text-2xl font-semibold text-zinc-300 shadow-sm ">
            Cultura
          </span>
        </div>
        <div className="z-10 flex h-40 w-full items-center justify-center rounded-sm border border-zinc-300 bg-categories-policy bg-cover shadow-sm">
          <span className="text-medium text-2xl font-semibold text-zinc-300 shadow-sm ">
            Política
          </span>
        </div>
        <div className="z-10 flex h-40 w-full items-center justify-center rounded-sm border border-zinc-300 bg-categories-economy bg-cover shadow-sm">
          <span className="text-medium text-2xl font-semibold text-zinc-300 shadow-sm ">
            Economia
          </span>
        </div>
        <div className="z-10 flex h-40 w-full items-center justify-center rounded-sm border border-zinc-300 bg-categories-business bg-cover shadow-sm">
          <span className="text-medium text-2xl font-semibold text-zinc-100 shadow-sm">
            Negócios
          </span>
        </div>
        <div className="z-10 flex h-40 w-full items-center justify-center rounded-sm border border-zinc-300 bg-categories-manaus bg-cover shadow-sm">
          <span className="text-medium text-2xl font-semibold text-zinc-100 shadow-sm">
            Manaus
          </span>
        </div>
      </div>
    </section>
  )
}
