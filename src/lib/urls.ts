export function projectUrl(domain: string): string {
  const normalized = domain.replace(/^https?:\/\//, '')
  return `https://${encodeURI(normalized)}`
}

const GGM_PREVIEW_BASE = 'https://galaxygrowthmedia.com/images/website-examples'

/** Official portfolio screenshots (same assets as galaxygrowthmedia.com/our-work/) */
export function ggmPreviewImage(filename: string): string {
  return `${GGM_PREVIEW_BASE}/${filename}`
}
