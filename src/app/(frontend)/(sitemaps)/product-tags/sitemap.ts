import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { unstable_cache as cache } from 'next/cache';
import { getClientSideURL } from '@/lib/get-url';
import { type MetadataRoute } from 'next';
import getProductTagsForSitemap, {
  type GetProductTagsForSitemapProps,
} from '@/services/product-tags/get-product-tags-for-sitemap';
import { ECOMMERCE_ENABLED } from '@/payload.constants';

const getProductTags = ({ limit, page }: Omit<GetProductTagsForSitemapProps, 'payload'>) =>
  cache(
    async () => {
      const payload = await getPayload({ config: configPromise });
      const records = await getProductTagsForSitemap({
        limit,
        page,
        payload,
      });
      return records;
    },
    [
      'product-tags-sitemap',
      typeof limit === 'string' || typeof limit === 'number' ? limit.toString() : '',
      typeof page === 'string' || typeof page === 'number' ? page.toString() : '',
    ],
    {
      revalidate: 3600,
      tags: ['product-tags-sitemap'],
    },
  );

type SitemapProps = {
  id: number;
};

const sitemapSize = 5_000;

export async function generateSitemaps(): Promise<SitemapProps[]> {
  if (!ECOMMERCE_ENABLED) {
    return [];
  }

  const records = await getProductTags({
    limit: sitemapSize,
    page: 1,
  })();

  return Array.from({ length: records.totalPages }, (_, i) => ({ id: i + 1 }));
}

export default async function sitemap({ id: page }: SitemapProps): Promise<MetadataRoute.Sitemap> {
  if (!ECOMMERCE_ENABLED) {
    return [];
  }

  const baseURL = getClientSideURL();

  const records = await getProductTags({
    limit: sitemapSize,
    page,
  })();
  return records.docs.map((post) => {
    return {
      lastModified: new Date(post.updatedAt || post.createdAt),
      priority: 0.3,
      url: [baseURL, '/product-tags', post.slug]
        .filter(Boolean)
        .map((segment) => segment?.replace(/(^\/|\/$)/g, ''))
        .join('/'),
    };
  });
}
