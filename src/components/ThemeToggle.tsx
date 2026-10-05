import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

interface ThemeToggleProps {
  compact?: boolean
}

export function ThemeToggle({ compact }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  if (compact) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-studio-border bg-studio-surface p-2 text-studio-text shadow-sm"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex w-full items-center justify-center gap-2 rounded-lg border border-studio-border bg-studio-bg px-3 py-2 text-xs font-medium text-studio-text transition-colors hover:border-studio-text/40"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <>
          <Sun className="h-3.5 w-3.5" aria-hidden />
          Light mode
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5" aria-hidden />
          Dark mode
        </>
      )}
    </button>
  )
}
