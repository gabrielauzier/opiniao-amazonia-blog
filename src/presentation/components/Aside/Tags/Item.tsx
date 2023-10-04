interface ItemProps {
  text: string
}

export function Item({ text }: ItemProps) {
  return (
    <div className="w-fit cursor-pointer rounded-full bg-orange-100 px-3 py-2 shadow-md transition duration-150 ease-in-out hover:scale-110 hover:bg-orange-200">
      <span>{text}</span>
    </div>
  )
}
