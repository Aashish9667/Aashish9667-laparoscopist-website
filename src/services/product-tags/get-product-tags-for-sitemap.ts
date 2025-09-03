import { type BasePayload } from 'payload';

export type GetProductTagsForSitemapProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export default async function getProductTagsForSitemap(props: GetProductTagsForSitemapProps) {
  const { limit, page, payload } = props;

  return payload.find({
    collection: 'product-tags',
    limit,
    overrideAccess: false,
    page,
    pagination: true,
    populate: {},
    select: {
      createdAt: true,
      slug: true,
      updatedAt: true,
    },
    showHiddenFields: true,
    sort: ['-updatedAt'],
  });
}
