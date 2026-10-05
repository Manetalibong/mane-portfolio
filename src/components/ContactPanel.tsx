import { GitBranch, Globe, Link2, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { PanelShell } from './PanelShell'

export function ContactPanel() {
  return (
    <PanelShell title="Contact" subtitle="Web dev, WordPress, or AI-assisted builds — let's talk">
      <div className="mx-auto flex max-w-lg flex-col gap-4">
        <a
          href={profile.personalWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="card-surface card-lift group flex items-center gap-4 rounded-xl p-5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-studio-accent/10 text-studio-accent transition-transform duration-300 group-hover:scale-110">
            <Globe className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-sm text-studio-muted">Business website</p>
            <p className="font-medium text-studio-text">manetalibong.com</p>
          </div>
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
          className="card-surface card-lift group flex items-center gap-4 rounded-xl p-5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-studio-accent/10 text-studio-accent transition-transform duration-300 group-hover:scale-110">
            <Phone className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-sm text-studio-muted">Phone</p>
            <p className="font-medium text-studio-text">{profile.phone}</p>
          </div>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="card-surface card-lift group flex items-center gap-4 rounded-xl p-5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-studio-accent/10 text-studio-accent transition-transform duration-300 group-hover:scale-110">
            <Mail className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-sm text-studio-muted">Email</p>
            <p className="font-medium text-studio-text">{profile.email}</p>
          </div>
        </a>
        <a
          href={profile.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="card-surface card-lift group flex items-center gap-4 rounded-xl p-5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-studio-accent/10 text-studio-accent transition-transform duration-300 group-hover:scale-110">
            <Link2 className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-sm text-studio-muted">LinkedIn</p>
            <p className="font-medium text-studio-text">Connect</p>
          </div>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="card-surface card-lift group flex items-center gap-4 rounded-xl p-5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-studio-accent/10 text-studio-accent transition-transform duration-300 group-hover:scale-110">
            <GitBranch className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <p className="text-sm text-studio-muted">GitHub</p>
            <p className="font-medium text-studio-text">Code & projects</p>
          </div>
        </a>
      </div>
    </PanelShell>
  )
}
