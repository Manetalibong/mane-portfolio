import { useState } from 'react'
import { featuredProjectOrder } from '../data/featuredOrder'
import { moreBuildsPriorityOrder } from '../data/moreBuildsOrder'
import { highlightedProjects, projects, verifiedLiveCount } from '../data/projects'
import type { Project } from '../types'
import { PanelShell } from './PanelShell'
import { PreviewLightbox } from './PreviewLightbox'
import { ProjectCard } from './ProjectCard'
import { WorksReviewQuotePop } from './WorksReviewQuotePop'

const highlightedIds = new Set<string>(featuredProjectOrder)

function moreBuildsRank(id: string): number {
  const index = moreBuildsPriorityOrder.indexOf(id as (typeof moreBuildsPriorityOrder)[number])
  return index === -1 ? moreBuildsPriorityOrder.length + 1 : index
}

export function WorksGrid() {
  const [previewProject, setPreviewProject] = useState<Project | null>(null)

  const restProjects = projects
    .filter((project) => !highlightedIds.has(project.id))
    .sort((a, b) => {
      const orderDiff = moreBuildsRank(a.id) - moreBuildsRank(b.id)
      if (orderDiff !== 0) return orderDiff
      return a.name.localeCompare(b.name)
    })

  const industryCount = new Set(projects.map((p) => p.category)).size

  const stats = [
    { value: String(projects.length), label: 'Total builds' },
    { value: String(verifiedLiveCount), label: 'Verified live' },
    { value: `${industryCount}+`, label: 'Industries' },
  ]

  return (
    <>
      <PanelShell
        title="Works"
        subtitle="Client websites & web projects — WordPress, custom builds, and more. Click any preview to enlarge."
      >
        {/* Stats bar */}
        <div className="mb-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-studio-border bg-studio-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-studio-surface px-4 py-4 text-center sm:px-6">
              <p className="font-display text-xl font-semibold text-studio-text md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-studio-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <section className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-studio-text">
              <span className="h-1.5 w-1.5 rounded-full bg-studio-text" />
              Highlighted
            </h2>
            <span className="rounded-full border border-studio-border bg-studio-surface px-2 py-0.5 text-[11px] font-medium text-studio-muted">
              {highlightedProjects.length}
            </span>
            <span className="h-px flex-1 bg-studio-border" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlightedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onPreview={setPreviewProject} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-studio-muted">
              More builds
            </h2>
            <span className="rounded-full border border-studio-border bg-studio-surface px-2 py-0.5 text-[11px] font-medium text-studio-muted">
              {restProjects.length}
            </span>
            <span className="h-px flex-1 bg-studio-border" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {restProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onPreview={setPreviewProject} />
            ))}
          </div>
        </section>
      </PanelShell>
      <PreviewLightbox project={previewProject} onClose={() => setPreviewProject(null)} />
      <WorksReviewQuotePop />
    </>
  )
}
