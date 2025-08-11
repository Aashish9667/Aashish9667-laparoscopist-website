import { getServerSideURL } from '@/lib/get-url';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = getServerSideURL();
  return [
    {
      changeFrequency: 'monthly',
      lastModified: new Date('08-10-2025'),
      priority: 1.0,
      url: baseURL,
    },
  ];
}
