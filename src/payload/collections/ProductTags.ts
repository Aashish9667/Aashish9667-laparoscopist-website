import type { CollectionConfig } from 'payload';
import { slug } from '@/payload/fields/slug/config';
import { admin, anyone, editor, or, staff } from './helpers/access';

const ProductTags: CollectionConfig = {
  access: {
    admin: or(staff, editor, admin),
    create: or(editor, admin),
    delete: admin,
    read: anyone,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    defaultColumns: ['name', 'slug', 'count', 'updatedAt'],
    group: 'E-Commerce',
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      required: true,
      type: 'text',
    },
    slug(
      {
        trackingField: 'title',
      },
      {
        required: true,
        unique: true,
      },
    ),
    {
      name: 'description',
      type: 'textarea',
    },
    {
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      defaultValue: 0,
      name: 'count',
      type: 'number',
    },
  ],
  slug: 'product-tags',
  timestamps: true,
  versions: {
    drafts: false,
    maxPerDoc: 5,
  },
};

export default ProductTags;
