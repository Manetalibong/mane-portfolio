import { FileText, Globe, Home, Mail, Star, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { profile } from '../data/profile'
import type { PanelId } from '../types'
import { ThemeToggle } from './ThemeToggle'

type NavPanel = { kind: 'panel'; id: PanelId; label: string; icon: LucideIcon }
type NavExternal = { kind: 'external'; label: string; icon: LucideIcon; href: string }

const NAV: (NavPanel | NavExternal)[] = [
  { kind: 'panel', id: 'works', label: 'Works', icon: Home },
  { kind: 'panel', id: 'about', label: 'About', icon: User },
  { kind: 'panel', id: 'resume', label: 'Resume', icon: FileText },
  { kind: 'panel', id: 'reviews', label: 'Reviews', icon: Star },
  { kind: 'panel', id: 'contact', label: 'Contact', icon: Mail },
  { kind: 'external', label: 'Website', icon: Globe, href: profile.personalWebsite },
]

const navItemClass = (active: boolean) =>
  `group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
    active
      ? 'bg-studio-text/[0.08] text-studio-text'
      : 'text-studio-muted hover:bg-studio-text/[0.04] hover:text-studio-text'
  }`

interface SidebarProps {
  panel: PanelId
  onNavigate: (id: PanelId) => void
}

export function Sidebar({ panel, onNavigate }: SidebarProps) {
  return (
    <>
      <aside className="hidden h-full w-[232px] shrink-0 flex-col border-r border-studio-border bg-studio-surface md:flex">
        <div className="border-b border-studio-border px-5 py-6">
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="group flex w-full items-center gap-3 rounded-lg text-left transition-opacity hover:opacity-95"
          >
            <span className="relative shrink-0">
              <img
                src={profile.avatarUrl}
                alt=""
                className="h-11 w-11 rounded-full border-2 border-studio-border object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-studio-surface bg-emerald-500" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold text-studio-text">
                {profile.name}
              </p>
              <p className="truncate text-xs text-studio-muted">{profile.title}</p>
            </div>
          </button>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-studio-border bg-studio-bg px-2.5 py-1 text-[11px] font-medium text-studio-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for work
          </span>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Main">
          {NAV.map((item) => {
            if (item.kind === 'external') {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={navItemClass(false)}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden />
                  {item.label}
                </a>
              )
            }
            const active = panel === item.id
            const Icon = item.icon
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={navItemClass(active)}
                aria-current={active ? 'page' : undefined}
              >
                <span
                  className={`absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-studio-text transition-all duration-200 ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                  }`}
                />
                <Icon
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    active ? '' : 'group-hover:translate-x-0.5'
                  }`}
                  aria-hidden
                />
                {item.label}
              </button>
            )
          })}
        </nav>
        <div className="border-t border-studio-border p-4">
          <ThemeToggle />
        </div>
      </aside>

      <nav
        className="fixed bottom-0 left-0 right-0 z-20 flex border-t border-studio-border bg-studio-surface/95 backdrop-blur md:hidden"
        aria-label="Main mobile"
      >
        {NAV.map((item) => {
          if (item.kind === 'external') {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex min-w-0 flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium text-studio-muted"
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                <span className="truncate px-0.5">{item.label}</span>
              </a>
            )
          }
          const active = panel === item.id
          const Icon = item.icon
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium ${
                active ? 'text-studio-text' : 'text-studio-muted'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden />
              <span className="truncate px-0.5">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="fixed right-3 top-3 z-30 md:hidden">
        <ThemeToggle compact />
      </div>
    </>
  )
}
