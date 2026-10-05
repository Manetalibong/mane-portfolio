export type PanelId = 'works' | 'about' | 'resume' | 'reviews' | 'contact'

export interface Project {
  id: string
  name: string
  domain: string
  category: string
  /** Screenshot from Galaxy Growth Media portfolio gallery */
  previewImage: string
  /** Verified working URL (from Google Sites portfolio scrape) */
  liveUrl?: string
}
