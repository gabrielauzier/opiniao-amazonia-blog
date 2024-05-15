export function ContactBanner() {
  return (
    <section className="mb-14">
      <div className="max-w-body bg-contact mx-auto flex h-[36rem] flex-col items-center justify-center gap-4 bg-cover px-5 text-center shadow-lg lg:px-0">
        <h3 className="text-4xl font-medium text-white">
          Conheça, Compreenda, Converse
        </h3>
        <span className="text-xl text-white">
          Opinião Amazônia - A voz dos estados amazônicos
        </span>
        <button className="rounded-sm bg-white px-10 py-4 font-medium text-emerald-700 shadow-md hover:bg-emerald-50">
          Entre em contato conosco
        </button>
      </div>
    </section>
  )
}
