import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { unstable_cache as cache } from 'next/cache';
import { getClientSideURL } from '@/lib/get-url';
import { type MetadataRoute } from 'next';
import getProductsForSitemap, {
  GetProductsForSitemapProps,
} from '@/services/products/get-products-for-sitemap';
import { ECOMMERCE_ENABLED } from '@/payload.constants';

const getProducts = ({ limit, page }: Omit<GetProductsForSitemapProps, 'payload'>) =>
  cache(
    async () => {
      const payload = await getPayload({ config: configPromise });
      const records = await getProductsForSitemap({
        limit,
        page,
        payload,
      });
      return records;
    },
    [
      'products-sitemap',
      typeof limit === 'string' || typeof limit === 'number' ? limit.toString() : '',
      typeof page === 'string' || typeof page === 'number' ? page.toString() : '',
    ],
    {
      revalidate: 3600,
      tags: ['products-sitemap'],
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

  const records = await getProducts({
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

  const records = await getProducts({
    limit: sitemapSize,
    page,
  })();
  return records.docs.map((post) => {
    return {
      lastModified: new Date(post.updatedAt || post.createdAt),
      priority: 0.3,
      url: [baseURL, '/product', post.slug]
        .filter(Boolean)
        .map((segment) => segment?.replace(/(^\/|\/$)/g, ''))
        .join('/'),
    };
  });
}
