import { getClientSideURL } from '@/lib/get-url';
import type { SEOPluginConfig } from '@payloadcms/plugin-seo/types';
import PostCategories from '@/payload/collections/PostCategories';
import PostTags from '@/payload/collections/PostTags';
import Posts from '@/payload/collections/Posts';
import type { CollectionSlug } from 'payload';

const CollectionSlugMapping = {
  [PostCategories.slug]: 'blogs/category',
  [Posts.slug]: 'blogs',
  [PostTags.slug]: 'blogs/tag',
} as const;

function getSlugFromCollectionSlug(collectionSlug?: CollectionSlug) {
  if (!collectionSlug) {
    return '';
  }

  return CollectionSlugMapping[collectionSlug] || '';
}

export default function seoPluginConfig(): SEOPluginConfig {
  return {
    collections: [Posts.slug, PostTags.slug, PostCategories.slug],
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
