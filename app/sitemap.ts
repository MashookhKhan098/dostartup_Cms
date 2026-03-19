import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dostartup.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dostartup.in/proprietorship',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://dostartup.in/trademark-objection',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://dostartup.in/partners',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // add all your other pages here...
  ]
}
