import { BasePayload } from 'payload';

export type GetTagProps = {
  id?: string;
  payload: BasePayload;
  slug?: string;
};

export default async function getTag({ id, payload, slug }: GetTagProps) {
  if (!slug && !id) {
    throw new Error('Either slug or id must be provided');
  }
  const result = await payload.find({
    collection: 'post-tags',
    limit: 1,
    overrideAccess: false,
    pagination: false,
    populate: {
      'post-tags': {
        meta: true,
      },
    },
    select: {
      description: true,
      meta: true,
      name: true,
      slug: true,
    },
    showHiddenFields: true,
    where: slug ? { slug: { equals: slug } } : { id: { equals: id } },
  });
  return result.docs[0] || null;
}
