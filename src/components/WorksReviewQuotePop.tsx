import { AnimatePresence, motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const SNIPPETS = profile.worksReviewSnippets
const INITIAL_DELAY_MS = 1200
const SHOW_MS = 5500
const HIDE_MS = 450

export function WorksReviewQuotePop() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timers: number[] = []

    const schedule = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms))
    }

    const showNext = (nextIndex: number) => {
      if (cancelled) return
      setIndex(nextIndex)
      setVisible(true)
      schedule(() => {
        if (cancelled) return
        setVisible(false)
        schedule(() => {
          showNext((nextIndex + 1) % SNIPPETS.length)
        }, HIDE_MS)
      }, SHOW_MS)
    }

    schedule(() => showNext(0), INITIAL_DELAY_MS)

    return () => {
      cancelled = true
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  const text = SNIPPETS[index]

  return (
    <div
      className="pointer-events-none fixed bottom-[4.5rem] right-4 z-40 max-w-[min(100vw-2rem,22rem)] md:bottom-8 md:right-8"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        {visible ? (
          <motion.aside
            key={index}
            initial={{ opacity: 0, y: 16, x: 8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 10, x: 4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto"
            aria-label="Client review quote"
          >
            <div className="rounded-2xl border border-studio-border-strong bg-studio-surface/95 p-4 shadow-studio-lg backdrop-blur-md md:p-5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-studio-muted">
                Client review
              </p>
              <Quote className="mb-2 h-4 w-4 text-studio-muted/80" aria-hidden />
              <p className="text-sm leading-relaxed text-studio-text/90">&ldquo;{text}&rdquo;</p>
              <a
                href="#reviews"
                className="pointer-events-auto mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-studio-text underline-offset-2 hover:underline"
              >
                Watch full review
              </a>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
