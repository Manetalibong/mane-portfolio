import { useCallback, useEffect, useState } from 'react'
import type { PanelId } from '../types'

const PANELS: PanelId[] = ['works', 'about', 'resume', 'reviews', 'contact']

function parseHash(): PanelId {
  const raw = window.location.hash.replace('#', '').toLowerCase()
  if (PANELS.includes(raw as PanelId)) return raw as PanelId
  return 'works'
}

export function useHashPanel() {
  const [panel, setPanelState] = useState<PanelId>(() =>
    typeof window !== 'undefined' ? parseHash() : 'works',
  )

  const setPanel = useCallback((next: PanelId) => {
    setPanelState(next)
    const hash = next === 'works' ? '#works' : `#${next}`
    if (window.location.hash !== hash) {
      window.history.replaceState(null, '', hash)
    }
  }, [])

  useEffect(() => {
    const onHash = () => setPanelState(parseHash())
    window.addEventListener('hashchange', onHash)
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#works')
    }
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return { panel, setPanel }
}
