import { BadgeCheck, Quote } from 'lucide-react'
import { profile } from '../data/profile'
import { PanelShell } from './PanelShell'
import { VideoReview } from './VideoReview'

export function ReviewsPanel() {
  return (
    <PanelShell title="Reviews" subtitle="On-camera client reference">
      <div className="mx-auto max-w-4xl space-y-6 pb-4">
        {/* Verified strip */}
        <div className="card-surface flex items-center gap-3 rounded-xl px-5 py-3.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-500">
            <BadgeCheck className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-studio-text">Verified client reference</p>
            <p className="truncate text-xs text-studio-muted">{profile.reviewSpeaker}</p>
          </div>
        </div>

        {/* Video */}
        <VideoReview
          videoId={profile.youtubeReviewId}
          speaker={profile.reviewSpeaker}
          speakerRole={profile.reviewSpeakerRole}
          hideHeader
        />

        {/* Quotes */}
        <div className="grid gap-5 sm:grid-cols-2">
          {profile.reviewQuotes.map((quote, i) => (
            <blockquote
              key={quote.attribution}
              className={`card-surface relative overflow-hidden rounded-2xl p-6 md:p-7 ${
                profile.reviewQuotes.length % 2 !== 0 && i === profile.reviewQuotes.length - 1
                  ? 'sm:col-span-2'
                  : ''
              }`}
            >
              <Quote
                className="absolute -right-2 -top-2 h-16 w-16 text-studio-text/5"
                aria-hidden
              />
              <p className="relative text-base leading-relaxed text-studio-text/90">
                &ldquo;{quote.text}&rdquo;
              </p>
              <footer className="relative mt-5 flex items-center gap-2 border-t border-studio-border pt-4 text-sm font-medium text-studio-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {quote.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </PanelShell>
  )
}
