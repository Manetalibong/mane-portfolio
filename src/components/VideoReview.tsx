import { Play } from 'lucide-react'
import { useState } from 'react'

interface VideoReviewProps {
  videoId: string
  speaker: string
  speakerRole: string
  label?: string
  hideHeader?: boolean
}

export function VideoReview({
  videoId,
  speaker,
  speakerRole,
  label = 'Client reference',
  hideHeader = false,
}: VideoReviewProps) {
  const [playing, setPlaying] = useState(false)

  const poster = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&origin=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`

  return (
    <div className="card-surface overflow-hidden rounded-2xl">
      {!hideHeader ? (
        <div className="border-b border-studio-border px-5 py-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-studio-muted">{label}</p>
          <p className="mt-1 font-display text-lg font-semibold text-studio-text">{speaker}</p>
          <p className="text-sm text-studio-muted">{speakerRole}</p>
        </div>
      ) : null}
      <div className="relative aspect-video w-full bg-studio-card-preview">
        {playing ? (
          <iframe
            title={`Video review from ${speaker}`}
            className="absolute inset-0 h-full w-full border-0"
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex w-full items-center justify-center"
            aria-label={`Play video review from ${speaker}`}
          >
            <img
              src={poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
              }}
            />
            <span className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/55" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-sm transition-transform group-hover:scale-105">
              <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
