import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { unstable_cache as cache } from 'next/cache';
import { getClientSideURL } from '@/lib/get-url';
import { type MetadataRoute } from 'next';
import getProductCategoriesForSitemap, {
  type GetProductCategoriesForSitemapProps,
} from '@/services/product-categories/get-product-categories-for-sitemap';
import { ECOMMERCE_ENABLED } from '@/payload.constants';

const getProductCategories = ({
  limit,
  page,
}: Omit<GetProductCategoriesForSitemapProps, 'payload'>) =>
  cache(
    async () => {
      const payload = await getPayload({ config: configPromise });
      const categories = await getProductCategoriesForSitemap({
        limit,
        page,
        payload,
      });
      return categories;
    },
    [
      'product-categories-sitemap',
      typeof limit === 'string' || typeof limit === 'number' ? limit.toString() : '',
      typeof page === 'string' || typeof page === 'number' ? page.toString() : '',
    ],
    {
      revalidate: 3600,
      tags: ['product-categories-sitemap'],
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

  const categories = await getProductCategories({
    limit: sitemapSize,
    page: 1,
  })();

  return Array.from({ length: categories.totalPages }, (_, i) => ({ id: i + 1 }));
}

export default async function sitemap({ id: page }: SitemapProps): Promise<MetadataRoute.Sitemap> {
  if (!ECOMMERCE_ENABLED) {
    return [];
  }

  const baseURL = getClientSideURL();

  const categories = await getProductCategories({
    limit: sitemapSize,
    page,
  })();
  return categories.docs.map((post) => {
    return {
      lastModified: new Date(post.updatedAt || post.createdAt),
      priority: 0.3,
      url: [baseURL, '/product-category', post.slug]
        .filter(Boolean)
        .map((segment) => segment?.replace(/(^\/|\/$)/g, ''))
        .join('/'),
    };
  });
}
