import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { unstable_cache as cache } from 'next/cache';
import { getClientSideURL } from '@/lib/get-url';
import { type MetadataRoute } from 'next';
import getPagesForSitemap, {
  type GetPagesForSitemapProps,
} from '@/services/pages/get-pages-for-sitemap';

const getPages = ({ limit, page }: Omit<GetPagesForSitemapProps, 'payload'>) =>
  cache(
    async () => {
      const payload = await getPayload({ config: configPromise });
      const pages = await getPagesForSitemap({
        limit,
        page,
        payload,
      });
      return pages;
    },
    [
      'pages-sitemap',
      typeof limit === 'string' || typeof limit === 'number' ? limit.toString() : '',
      typeof page === 'string' || typeof page === 'number' ? page.toString() : '',
    ],
    {
      revalidate: 3600,
      tags: ['pages-sitemap'],
    },
  );

type SitemapProps = {
  id: number;
};

const sitemapSize = 5_000;

export async function generateSitemaps(): Promise<SitemapProps[]> {
  const pages = await getPages({
    limit: sitemapSize,
    page: 1,
  })();

  return Array.from({ length: pages.totalPages }, (_, i) => ({ id: i + 1 }));
}

export default async function sitemap({ id: page }: SitemapProps): Promise<MetadataRoute.Sitemap> {
  const baseURL = getClientSideURL();

  const pages = await getPages({
    limit: sitemapSize,
    page,
  })();
  return pages.docs.map((post) => {
    return {
      lastModified: new Date(post.updatedAt || post.createdAt),
      priority: 0.3,
      url: [baseURL, post.prefix, post.slug === 'home' ? '' : post.slug]
        .filter(Boolean)
        .map((segment) => segment?.replace(/(^\/|\/$)/g, ''))
        .join('/'),
    };
  });
}
