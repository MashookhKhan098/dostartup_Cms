import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://dostartup.in'

// Directories inside /app that are NOT pages (no routes)
const EXCLUDED_DIRS = new Set(['components', 'utils', 'api'])

function getPageRoutes(): string[] {
  const appDir = path.join(process.cwd(), 'app')
  const routes: string[] = []

  const entries = fs.readdirSync(appDir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (EXCLUDED_DIRS.has(entry.name)) continue

    const dirPath = path.join(appDir, entry.name)
    const files = fs.readdirSync(dirPath)

    const hasPage = files.some(
      (file) => file === 'page.tsx' || file === 'page.jsx'
    )

    if (hasPage) {
      routes.push(entry.name)
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getPageRoutes()

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  for (const route of routes) {
    sitemapEntries.push({
      url: `${BASE_URL}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  }

  return sitemapEntries
}
