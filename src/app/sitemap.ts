import { MetadataRoute } from 'next'
import { client } from '@/src/sanity/sanity-utils'
import { groq } from 'next-sanity'

const BASE_URL = 'https://brewclick.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let pages: any[] = []
  let blogs: any[] = []
  let caseStudies: any[] = []
  let services: any[] = []

  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const [fetchedPages, fetchedBlogs, fetchedCaseStudies, fetchedServices] = await Promise.all([
        client.fetch(
          groq`*[_type == "page" && defined(seo.slug.current)] {
            "slug": seo.slug.current,
            _updatedAt
          }`
        ),
        client.fetch(
          groq`*[_type == "blog" && defined(slug.current)] {
            "slug": slug.current,
            _updatedAt,
            publishedAt
          }`
        ),
        client.fetch(
          groq`*[_type == "work" && defined(slug.current)] {
            "slug": slug.current,
            _updatedAt
          }`
        ),
        client.fetch(
          groq`*[_type == "service" && defined(slug.current)] {
            "slug": slug.current,
            _updatedAt
          }`
        ),
      ])
      pages = fetchedPages || []
      blogs = fetchedBlogs || []
      caseStudies = fetchedCaseStudies || []
      services = fetchedServices || []
    } catch (err) {
      console.warn('Failed to fetch sitemap routes from Sanity:', err)
    }
  }

  // Static hardcoded pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Dynamic Sanity pages
  const dynamicPages: MetadataRoute.Sitemap = pages.map((page: any) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(page._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog._updatedAt || blog.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Case studies
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study: any) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    lastModified: new Date(study._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Services
  const servicePages: MetadataRoute.Sitemap = services.map((service: any) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(service._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...dynamicPages,
    ...blogPages,
    ...caseStudyPages,
    ...servicePages,
  ]
}