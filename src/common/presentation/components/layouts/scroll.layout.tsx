import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@radix-ui/react-scroll-area'
import { cn } from '../../utils/classnames'

export function ScrollLayout({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea className="--scrollbar-size=10px min-h-screen w-full overflow-hidden">
      <ScrollAreaViewport className="max-h-screen overflow-x-scroll border-inherit">
        <div className="max-w-[1620px] ">{children}</div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        className={cn(
          'visible flex w-2.5 touch-none  select-none p-0.5 ',
          'bg-zinc-300',
          // 'dark:bg-zinc-700',
        )}
        orientation="vertical"
      >
        <ScrollAreaThumb
          className={cn(
            'relative flex-1 rounded-lg bg-zinc-400 hover:brightness-75',
            // 'dark:bg-zinc-500',
            "before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']",
          )}
        />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner className="ScrollAreaCorner" />
    </ScrollArea>
  )
}
