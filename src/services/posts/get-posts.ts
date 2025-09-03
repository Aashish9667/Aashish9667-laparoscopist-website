import { type BasePayload, type PayloadRequest, type Where } from 'payload';

export type GetPostProps = {
  categories?: string[];
  limit: number;
  page: number;
  payload: BasePayload;
  req?: Partial<PayloadRequest>;
  tags?: string[];
};

export default async function getPosts(props: GetPostProps) {
  const { categories, limit, page, payload, req, tags } = props;

  const where: Where = {};
  if (categories && categories.length > 0) {
    where.category = { in: categories };
  }
  if (tags && tags.length > 0) {
    where.tags = { in: tags };
  }
  return payload.find({
    collection: 'posts',
    limit,
    overrideAccess: false,
    page,
    populate: {
      'post-categories': {
        name: true,
        slug: true,
      },
      'post-tags': { name: true, slug: true },
      users: {
        displayName: true,
        email: true,
        firstName: true,
        lastName: true,
        middleName: true,
      },
    },
    req,
    select: {
      author: true,
      category: true,
      createdAt: true,
      excerpt: true,
      featuredImage: true,
      publishedAt: true,
      readTime: true,
      slug: true,
      status: true,
      tags: true,
      title: true,
      updatedAt: true,
    },
    showHiddenFields: true,
    sort: '-publishedAt',
    where,
  });
}
