import { type BasePayload } from 'payload';

export type GetPostsForSitemapProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export default async function getPostsForSitemap(props: GetPostsForSitemapProps) {
  const { limit, page, payload } = props;

  return payload.find({
    collection: 'posts',
    limit,
    overrideAccess: false,
    page,
    pagination: true,
    populate: {
      posts: {
        featuredImage: true,
      },
    },
    select: {
      createdAt: true,
      featuredImage: true,
      publishedAt: true,
      slug: true,
      updatedAt: true,
    },
    showHiddenFields: true,
  });
}
