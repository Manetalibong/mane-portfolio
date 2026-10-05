import { ExternalLink, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  onPreview: (project: Project) => void
}

export function ProjectCard({ project, onPreview }: ProjectCardProps) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article className="card-surface card-lift group flex flex-col overflow-hidden rounded-xl">
      <button
        type="button"
        onClick={() => onPreview(project)}
        className="relative flex flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-studio-accent"
      >
        {project.liveUrl ? (
          <span className="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-500/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Live
          </span>
        ) : null}
        <div className="relative flex min-h-[140px] items-center justify-center overflow-hidden bg-studio-card-preview p-2 sm:min-h-[160px]">
          {!imgFailed ? (
            <img
              src={project.previewImage}
              alt={`${project.name} website preview`}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="max-h-[200px] w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="flex h-[140px] w-full flex-col items-center justify-center px-3 text-center">
              <span className="text-sm font-medium text-studio-text">{project.name}</span>
              <span className="mt-1 text-xs text-studio-muted">{project.domain}</span>
            </div>
          )}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
            <span className="flex translate-y-1 items-center gap-1.5 rounded-full bg-studio-bg/95 px-3 py-1.5 text-xs font-medium text-studio-text shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
              <ZoomIn className="h-3.5 w-3.5" aria-hidden />
              View larger
            </span>
          </span>
        </div>
      </button>
      <div className="flex items-start justify-between gap-2 border-t border-studio-border px-3.5 py-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-medium text-studio-text">{project.name}</h3>
          <p className="truncate text-xs text-studio-muted">{project.category}</p>
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 shrink-0 rounded p-1 text-studio-muted transition-colors hover:bg-studio-bg hover:text-studio-accent"
            aria-label={`Open live site for ${project.name}`}
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  )
}
