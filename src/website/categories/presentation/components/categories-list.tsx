interface CategoriesListProps {
  categories: string[]
}

export function CategoriesList({ categories }: CategoriesListProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {categories.map((category) => (
        <div
          className="z-9 h-fit cursor-pointer rounded-sm bg-zinc-50 bg-opacity-20 px-3 py-1 transition duration-150 ease-in-out hover:scale-105 hover:bg-opacity-10"
          key={category}
        >
          <span className="text-zinc-50">{category}</span>
        </div>
      ))}
    </div>
  )
}
