import type { ReactNode } from 'react'

interface PanelShellProps {
  title: string
  subtitle?: string
  scrollable?: boolean
  children: ReactNode
  headerExtra?: ReactNode
}

export function PanelShell({
  title,
  subtitle,
  scrollable = true,
  children,
  headerExtra,
}: PanelShellProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="shrink-0 border-b border-studio-border bg-studio-surface/70 px-6 py-5 backdrop-blur-md md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight text-studio-text md:text-[2rem] md:leading-tight">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-1.5 max-w-2xl text-sm text-studio-muted md:text-base">{subtitle}</p>
            ) : null}
          </div>
          {headerExtra ? <div className="shrink-0">{headerExtra}</div> : null}
        </div>
      </header>
      <div
        className={`min-h-0 flex-1 px-6 py-6 md:px-8 md:py-8 ${scrollable ? 'works-scroll overflow-y-auto' : 'overflow-hidden'}`}
      >
        <div className="fade-up">{children}</div>
      </div>
    </div>
  )
}
