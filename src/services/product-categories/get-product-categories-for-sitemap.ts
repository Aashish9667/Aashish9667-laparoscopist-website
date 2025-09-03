import { type BasePayload } from 'payload';

export type GetProductCategoriesForSitemapProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export default async function getProductCategoriesForSitemap(
  props: GetProductCategoriesForSitemapProps,
) {
  const { limit, page, payload } = props;

  return payload.find({
    collection: 'product-categories',
    limit,
    overrideAccess: false,
    page,
    pagination: true,
    populate: {},
    select: {
      createdAt: true,
      menuOrder: true,
      slug: true,
      updatedAt: true,
    },
    showHiddenFields: true,
    sort: ['menuOrder', '-updatedAt'],
  });
}
