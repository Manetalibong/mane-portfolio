import { ExternalLink, X, ZoomIn } from 'lucide-react'
import { useEffect } from 'react'
import type { Project } from '../types'

interface PreviewLightboxProps {
  project: Project | null
  onClose: () => void
}

export function PreviewLightbox({ project, onClose }: PreviewLightboxProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} preview`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close preview"
        onClick={onClose}
      />
      <div className="animate-[fade-up_0.3s_cubic-bezier(0.22,1,0.36,1)_both] relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-studio-border-strong bg-studio-surface shadow-studio-lg">
        <div className="flex items-center justify-between gap-3 border-b border-studio-border px-4 py-3">
          <div className="min-w-0">
            <p className="truncate font-medium text-studio-text">{project.name}</p>
            <p className="truncate text-xs text-studio-muted">{project.category}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-studio-muted transition-colors hover:bg-studio-bg hover:text-studio-text"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto bg-studio-card-preview p-3 md:p-5">
          <img
            src={project.previewImage}
            alt={`${project.name} full website preview`}
            referrerPolicy="no-referrer"
            className="mx-auto h-auto max-h-[70vh] w-full object-contain"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-studio-border px-4 py-3">
          <span className="flex items-center gap-1.5 text-xs text-studio-muted">
            <ZoomIn className="h-3.5 w-3.5" aria-hidden />
            Portfolio screenshot
          </span>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-studio-accent px-4 py-2 text-sm font-medium text-studio-bg transition-colors hover:bg-studio-accent-dim"
            >
              Open live site
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          ) : (
            <span className="text-xs text-studio-muted">Live link not verified — preview only</span>
          )}
        </div>
      </div>
    </div>
  )
}
