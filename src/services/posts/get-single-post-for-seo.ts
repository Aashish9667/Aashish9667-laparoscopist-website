import { type PayloadRequest, type BasePayload } from 'payload';

export type GetSinglePostForSeoProps = {
  id?: string;
  payload: BasePayload;
  req?: Partial<PayloadRequest>;
  slug?: string;
};

export default async function getSinglePostForSeo(props: GetSinglePostForSeoProps) {
  const { id, payload, req, slug } = props;
  if (!slug && !id) {
    throw new Error('Either slug, id or page must be provided');
  }
  const posts = await payload.find({
    collection: 'posts',
    limit: 1,
    overrideAccess: false,
    pagination: false,
    populate: {
      posts: {
        author: true,
        featuredImage: true,
        meta: true,
      },
    },
    req,
    select: {
      author: true,
      excerpt: true,
      featuredImage: true,
      meta: true,
      publishedAt: true,
      slug: true,
      title: true,
    },
    showHiddenFields: true,
    where: slug ? { slug: { equals: slug } } : { id: { equals: id } },
  });

  return posts.docs[0];
}
