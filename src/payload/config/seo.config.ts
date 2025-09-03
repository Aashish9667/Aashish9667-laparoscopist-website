import { getClientSideURL } from '@/lib/get-url';
import type { SEOPluginConfig } from '@payloadcms/plugin-seo/types';
import PostCategories from '@/payload/collections/PostCategories';
import PostTags from '@/payload/collections/PostTags';
import Posts from '@/payload/collections/Posts';
import ProductCategories from '@/payload/collections/ProductCategories';
import Products from '@/payload/collections/Products';
import ProductTags from '@/payload/collections/ProductTags';
import type { CollectionSlug } from 'payload';
import { ECOMMERCE_ENABLED } from '@/payload.constants';

const CollectionSlugMapping = {
  [PostCategories.slug]: 'blogs/category',
  [Posts.slug]: 'blogs',
  [PostTags.slug]: 'blogs/tag',
  ...(ECOMMERCE_ENABLED
    ? {
        [ProductCategories.slug]: 'product-category',
        [Products.slug]: 'product',
        [ProductTags.slug]: 'product-tag',
      }
    : {}),
} as const;

function getSlugFromCollectionSlug(collectionSlug?: CollectionSlug) {
  if (!collectionSlug) {
    return '';
  }

  return CollectionSlugMapping[collectionSlug] || '';
}

export default function seoPluginConfig(): SEOPluginConfig {
  return {
    collections: [
      Posts.slug,
      PostTags.slug,
      PostCategories.slug,
      ...(ECOMMERCE_ENABLED ? [ProductCategories.slug, Products.slug, ProductTags.slug] : []),
    ],
    generateDescription: ({ collectionSlug, doc }) => {
      if (collectionSlug === PostTags.slug || collectionSlug === PostCategories.slug) {
        return doc.description?.slice(0, 150) || '';
      }
      return doc.excerpt?.slice(0, 150) || '';
    },
    generateImage: ({ doc }) => doc?.featuredImage,
    generateTitle: ({ collectionSlug, doc }) => {
      if (collectionSlug === PostTags.slug || collectionSlug === PostCategories.slug) {
        return doc.name;
      }
      return doc.title;
    },
    generateURL: ({ collectionSlug, doc }) => {
      const baseURl = getClientSideURL();
      const slug = getSlugFromCollectionSlug(collectionSlug);
      return [baseURl, slug, doc.slug].filter(Boolean).join('/');
    },
    uploadsCollection: 'media',
  };
}
