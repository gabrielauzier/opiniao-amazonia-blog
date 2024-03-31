export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-body mx-auto mt-10 w-full max-w-[1200px] flex-1 px-3 xl:px-0">
      {children}
    </main>
  )
}
