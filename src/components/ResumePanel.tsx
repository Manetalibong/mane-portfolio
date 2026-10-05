import { Briefcase, Download, ExternalLink, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import { PanelShell } from './PanelShell'

const localResume = `${import.meta.env.BASE_URL}resume.pdf`

export function ResumePanel() {
  return (
    <PanelShell
      title="Resume"
      subtitle="Scannable career timeline — full PDF linked"
      headerExtra={
        <div className="flex flex-wrap gap-2">
          <a
            href={profile.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-studio-border bg-studio-bg px-4 py-2 text-sm font-medium text-studio-text transition-colors hover:border-studio-border-strong"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            View PDF
          </a>
          <a
            href={localResume}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-studio-accent px-4 py-2 text-sm font-medium text-studio-bg transition-colors hover:bg-studio-accent-dim"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download
          </a>
        </div>
      }
    >
      <div className="mx-auto max-w-3xl space-y-12 pb-4">
        {/* Experience timeline */}
        <section>
          <h2 className="mb-6 flex items-center gap-2.5 font-display text-sm font-semibold uppercase tracking-wider text-studio-text">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-studio-text/10">
              <Briefcase className="h-4 w-4" aria-hidden />
            </span>
            Experience
          </h2>

          <ol className="relative ml-3 space-y-5 border-l border-studio-border pl-7">
            {profile.experience.map((job) => (
              <li key={`${job.org}-${job.period}`} className="relative">
                <span className="absolute -left-[33px] top-5 h-3 w-3 rounded-full border-2 border-studio-bg bg-studio-text" />
                <div className="card-surface card-lift rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold leading-snug text-studio-text md:text-lg">
                      {job.role}
                    </h3>
                    <span className="shrink-0 rounded-full border border-studio-border bg-studio-bg px-2.5 py-0.5 text-xs font-medium text-studio-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-studio-text/70">{job.org}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2.5 text-sm leading-relaxed text-studio-text/85"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-studio-muted" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section>
          <h2 className="mb-6 flex items-center gap-2.5 font-display text-sm font-semibold uppercase tracking-wider text-studio-text">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-studio-text/10">
              <GraduationCap className="h-4 w-4" aria-hidden />
            </span>
            Education
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {profile.education.map((ed) => (
              <div key={ed.school} className="card-surface card-lift rounded-xl p-5">
                <p className="font-medium leading-snug text-studio-text">{ed.school}</p>
                <p className="mt-1.5 text-sm text-studio-muted">{ed.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PanelShell>
  )
}
