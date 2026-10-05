import { featuredProjectOrder } from './featuredOrder'

/** Local copies in public/highlights/ (Google Sites blocks hotlinking in the browser) */
export const googleSitesPreviewById: Record<string, string> = Object.fromEntries(
  featuredProjectOrder.map((id) => [
    id,
    `${import.meta.env.BASE_URL}highlights/${id}.png`,
  ]),
)
