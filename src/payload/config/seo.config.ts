import { getClientSideURL } from '@/lib/get-url';
import type { SEOPluginConfig } from '@payloadcms/plugin-seo/types';

export default function seoPluginConfig(): SEOPluginConfig {
  return {
    collections: ['posts', 'post-tags', 'post-categories'],
    generateDescription: ({ collectionSlug, doc }) => {
      if (collectionSlug === 'post-tags' || collectionSlug === 'post-categories') {
        return doc.description?.slice(0, 150) || '';
      }
      return doc.excerpt?.slice(0, 150) || '';
    },
    generateImage: ({ doc }) => doc?.featuredImage,
    generateTitle: ({ collectionSlug, doc }) => {
      if (collectionSlug === 'post-tags' || collectionSlug === 'post-categories') {
        return doc.name;
      }
      return doc.title;
    },
    generateURL: ({ collectionSlug, doc }) => {
      const baseURl = getClientSideURL();
      let slug: string | undefined = collectionSlug;
      if (collectionSlug === 'post-tags') {
        slug = 'blogs/tag';
      } else if (collectionSlug === 'post-categories') {
        slug = 'blogs/category';
      } else if (collectionSlug === 'posts') {
        slug = 'blogs';
      }
      return [baseURl, slug, doc.slug].filter(Boolean).join('/');
    },
    uploadsCollection: 'media',
  };
}
