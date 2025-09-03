import { type BasePayload } from 'payload';

export type GetPagesForSitemapProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export default async function getPagesForSitemap(props: GetPagesForSitemapProps) {
  const { limit, page, payload } = props;

  return payload.find({
    collection: 'pages',
    limit,
    overrideAccess: false,
    page,
    pagination: true,
    select: {
      createdAt: true,
      prefix: true,
      slug: true,
      updatedAt: true,
    },
    showHiddenFields: true,
  });
}
