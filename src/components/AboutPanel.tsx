import { ArrowUpRight, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { projects, verifiedLiveCount } from '../data/projects'
import { PanelShell } from './PanelShell'

const stats = [
  { value: `${projects.length}+`, label: 'Sites built' },
  { value: String(verifiedLiveCount), label: 'Verified live' },
  { value: '#1', label: 'Local SEO rankings' },
  { value: '4+ yrs', label: 'Experience' },
]

export function AboutPanel() {
  return (
    <PanelShell title="About me" subtitle={profile.aboutLead}>
      <div className="mx-auto max-w-4xl space-y-8 pb-4">
        {/* Hero */}
        <div className="card-surface overflow-hidden rounded-2xl">
          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:gap-8 md:p-8">
            <div className="relative mx-auto shrink-0 md:mx-0">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-32 w-32 rounded-2xl border border-studio-border object-cover object-top md:h-40 md:w-40"
              />
              <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-studio-border bg-studio-elevated px-2.5 py-1 text-[11px] font-medium text-studio-muted shadow-studio">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open to work
              </span>
            </div>

            <div className="min-w-0 flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-studio-text md:text-3xl">
                {profile.name}
              </h2>
              <p className="mt-2 text-base text-studio-muted">{profile.title}</p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm text-studio-muted md:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {profile.location}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-studio-text/90 md:text-base">
                {profile.summary}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-studio-accent px-3.5 py-2 text-sm font-medium text-studio-bg transition-colors hover:bg-studio-accent-dim"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Email me
                </a>
                <a
                  href={profile.personalWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-studio-border bg-studio-bg px-3.5 py-2 text-sm font-medium text-studio-text transition-colors hover:border-studio-border-strong"
                >
                  <Globe className="h-4 w-4" aria-hidden />
                  Website
                  <ArrowUpRight className="h-3.5 w-3.5 text-studio-muted" aria-hidden />
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-studio-border bg-studio-bg px-3.5 py-2 text-sm font-medium text-studio-text transition-colors hover:border-studio-border-strong"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 gap-px border-t border-studio-border bg-studio-border sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-studio-surface px-5 py-4 text-center sm:text-left">
                <p className="font-display text-xl font-semibold text-studio-text md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-studio-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <section>
          <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-studio-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-studio-text" />
            Core skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-studio-border bg-studio-surface px-3 py-1.5 text-xs font-medium text-studio-text/90 transition-colors hover:border-studio-border-strong hover:text-studio-text md:text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Tools */}
        <section>
          <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-studio-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-studio-text" />
            Tools &amp; stack
          </h3>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {profile.tools.map((line) => (
              <div
                key={line}
                className="card-surface flex items-start gap-3 rounded-xl px-4 py-3 text-sm text-studio-text/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-studio-muted" />
                {line}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PanelShell>
  )
}
