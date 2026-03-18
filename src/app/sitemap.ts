import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://openclawhub.run';

// Pages that exist for both locales
const bilingualPages = [
  { path: '/', changeFrequency: 'daily' as const, priority: 1.0 },
  { path: '/blog', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: '/docs', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/privacy-policy', changeFrequency: 'monthly' as const, priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'monthly' as const, priority: 0.3 },
];

// Pages only in default locale (English, no prefix)
const enOnlyPages: { path: string; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']; priority: number }[] = [];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of bilingualPages) {
    // English (default locale, no prefix)
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          zh: `${baseUrl}/zh${page.path === '/' ? '' : page.path}`,
        },
      },
    });

    // Chinese (/zh prefix)
    entries.push({
      url: `${baseUrl}/zh${page.path === '/' ? '' : page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority * 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          zh: `${baseUrl}/zh${page.path === '/' ? '' : page.path}`,
        },
      },
    });
  }

  for (const page of enOnlyPages) {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  return entries;
}
