import { AnimatePresence, motion } from 'framer-motion'
import { AboutPanel } from './components/AboutPanel'
import { ContactPanel } from './components/ContactPanel'
import { ResumePanel } from './components/ResumePanel'
import { ReviewsPanel } from './components/ReviewsPanel'
import { Sidebar } from './components/Sidebar'
import { WorksGrid } from './components/WorksGrid'
import { useHashPanel } from './hooks/useHashPanel'
import type { PanelId } from './types'

function PanelView({ panel }: { panel: PanelId }) {
  switch (panel) {
    case 'works':
      return <WorksGrid />
    case 'about':
      return <AboutPanel />
    case 'resume':
      return <ResumePanel />
    case 'reviews':
      return <ReviewsPanel />
    case 'contact':
      return <ContactPanel />
    default:
      return <WorksGrid />
  }
}

export default function App() {
  const { panel, setPanel } = useHashPanel()

  return (
    <div className="flex h-full min-h-0 bg-studio-bg pb-[52px] md:pb-0">
      <Sidebar panel={panel} onNavigate={setPanel} />
      <main className="min-h-0 min-w-0 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={panel}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <PanelView panel={panel} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
