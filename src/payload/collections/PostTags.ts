import { slug } from '@/payload/fields/slug/config';
import type { CollectionConfig } from 'payload';
import { admin, editor, or, published } from './helpers/access';

const PostTags: CollectionConfig = {
  access: {
    admin: or(editor, admin),
    create: or(editor, admin),
    delete: admin,
    read: published,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    defaultColumns: ['name', 'slug'],
    group: 'Blog',
    useAsTitle: 'name',
  },
  fields: [
    {
      label: 'Name',
      name: 'name',
      required: true,
      type: 'text',
    },
    slug(
      { trackingField: 'name' },
      {
        required: true,
      },
    ),
    {
      label: 'Description',
      name: 'description',
      type: 'textarea',
    },
  ],
  labels: {
    plural: 'Tags',
    singular: 'Tag',
  },
  slug: 'post-tags',
  timestamps: true,
  versions: {
    drafts: false,
    maxPerDoc: 5,
  },
};

export default PostTags;
