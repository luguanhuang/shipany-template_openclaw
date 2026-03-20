import { MetadataRoute } from 'next';

import { envConfigs } from '@/config';

const baseUrl = envConfigs.app_url || 'https://www.openclawhub.run';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
          zh: `${baseUrl}/zh`,
        },
      },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
          zh: `${baseUrl}/zh`,
        },
      },
    },
  ];
}
