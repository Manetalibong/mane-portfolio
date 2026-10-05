import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'portfolio-theme'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

const THEME_EVENT = 'portfolio-theme-change'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  localStorage.setItem(STORAGE_KEY, theme)
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: theme }))
}

export function initTheme() {
  applyTheme(getPreferredTheme())
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof document !== 'undefined'
      ? ((document.documentElement.dataset.theme as Theme) || getPreferredTheme())
      : 'dark',
  )

  useEffect(() => {
    const onThemeChange = (event: Event) => {
      const next = (event as CustomEvent<Theme>).detail
      if (next === 'light' || next === 'dark') setThemeState(next)
    }
    window.addEventListener(THEME_EVENT, onThemeChange)
    return () => window.removeEventListener(THEME_EVENT, onThemeChange)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    applyTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return { theme, setTheme, toggleTheme }
}
