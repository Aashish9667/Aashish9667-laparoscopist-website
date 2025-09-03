import { getClientSideURL } from '@/lib/get-url';
import type { MetadataRoute } from 'next';
import { ECOMMERCE_ENABLED } from '@/payload.constants';
import { generateSitemaps as generatePostsSitemaps } from './posts/sitemap';
import { generateSitemaps as generatePostCategoriesSitemaps } from './post-categories/sitemap';
import { generateSitemaps as generatePostTagsSitemaps } from './post-tags/sitemap';
import { generateSitemaps as generatePagesSitemaps } from './pages/sitemap';
import { generateSitemaps as generateProductCategoriesSitemaps } from './product-categories/sitemap';
import { generateSitemaps as generateProductTagsSitemaps } from './product-tags/sitemap';
import { generateSitemaps as generateProductsSitemaps } from './products/sitemap';

type SitemapProps = {
  id: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = getClientSideURL();
  const [
    pagesSitemap,
    postCategoriesSitemaps,
    postTagsSitemaps,
    postsSitemaps,
    productCategoriesSitemaps,
    productTagsSitemaps,
    productsSitemaps,
  ] = await Promise.all([
    generatePagesSitemaps(),
    generatePostCategoriesSitemaps(),
    generatePostTagsSitemaps(),
    generatePostsSitemaps(),
    ...(ECOMMERCE_ENABLED
      ? [
          generateProductCategoriesSitemaps(),
          generateProductTagsSitemaps(),
          generateProductsSitemaps(),
        ]
      : []),
  ]);

  function addSitemapIndex(folder: string, indexes: SitemapProps[]) {
    if (!Array.isArray(indexes)) {
      return [];
    }
    return indexes.map(({ id }) => ({
      url: `${baseURL}/${folder}/sitemap/${id}.xml`,
    }));
  }

  return [
    ...addSitemapIndex('pages', pagesSitemap),
    ...addSitemapIndex('post-categories', postCategoriesSitemaps),
    ...addSitemapIndex('post-tags', postTagsSitemaps),
    ...addSitemapIndex('posts', postsSitemaps),
    ...addSitemapIndex('product-categories', productCategoriesSitemaps),
    ...addSitemapIndex('product-tags', productTagsSitemaps),
    ...addSitemapIndex('products', productsSitemaps),
  ];
}
