import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { unstable_cache as cache } from 'next/cache';
import { getClientSideURL } from '@/lib/get-url';
import { type MetadataRoute } from 'next';
import getCategoriesForSitemap, {
  type GetPostsForSitemapProps,
} from '@/services/posts/get-posts-for-sitemap';

const getCategories = ({ limit, page }: Omit<GetPostsForSitemapProps, 'payload'>) =>
  cache(
    async () => {
      const payload = await getPayload({ config: configPromise });
      const records = await getCategoriesForSitemap({
        limit,
        page,
        payload,
      });
      return records;
    },
    [
      'posts-categories-sitemap',
      typeof limit === 'string' || typeof limit === 'number' ? limit.toString() : '',
      typeof page === 'string' || typeof page === 'number' ? page.toString() : '',
    ],
    {
      revalidate: 3600,
      tags: ['posts-categories-sitemap'],
    },
  );

type SitemapProps = {
  id: number;
};

const sitemapSize = 5_000;

export async function generateSitemaps(): Promise<SitemapProps[]> {
  const records = await getCategories({
    limit: sitemapSize,
    page: 1,
  })();

  return Array.from({ length: records.totalPages }, (_, i) => ({ id: i + 1 }));
}

export default async function sitemap({ id: page }: SitemapProps): Promise<MetadataRoute.Sitemap> {
  const baseURL = getClientSideURL();

  const records = await getCategories({
    limit: sitemapSize,
    page,
  })();
  return records.docs.map((item) => {
    return {
      lastModified: new Date(item.updatedAt || item.createdAt),
      priority: 0.3,
      url: [baseURL, '/blogs/category', item.slug]
        .filter(Boolean)
        .map((segment) => segment?.replace(/(^\/|\/$)/g, ''))
        .join('/'),
    };
  });
}
