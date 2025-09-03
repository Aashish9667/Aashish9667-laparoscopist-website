import { type BasePayload } from 'payload';

export type GetCategoriesForSitemapProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export default async function getCategoriesForSitemap(props: GetCategoriesForSitemapProps) {
  const { limit, page, payload } = props;

  return payload.find({
    collection: 'post-categories',
    limit,
    overrideAccess: false,
    page,
    pagination: true,
    select: {
      createdAt: true,
      slug: true,
      updatedAt: true,
    },
    showHiddenFields: true,
  });
}
