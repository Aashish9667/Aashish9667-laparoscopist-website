import { type BasePayload } from 'payload';

export type GetTagsForSitemapProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export default async function getTagsForSitemap(props: GetTagsForSitemapProps) {
  const { limit, page, payload } = props;

  return payload.find({
    collection: 'post-tags',
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
