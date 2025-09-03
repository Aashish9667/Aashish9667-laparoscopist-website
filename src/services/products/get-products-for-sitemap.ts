import { type BasePayload } from 'payload';

export type GetProductsForSitemapProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export default async function getProductsForSitemap(props: GetProductsForSitemapProps) {
  const { limit, page, payload } = props;

  return payload.find({
    collection: 'products',
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
