import type { CollectionConfig } from 'payload';
import { slug } from '@/payload/fields/slug/config';
import { admin, anyone, editor, or, staff } from './helpers/access';

const ProductCategories: CollectionConfig = {
  access: {
    admin: or(staff, editor, admin),
    create: or(editor, admin),
    delete: admin,
    read: anyone,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    defaultColumns: ['name', 'slug', 'parent', 'count', 'updatedAt'],
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
      type: 'richText',
    },
    {
      name: 'image',
      relationTo: 'media',
      type: 'upload',
    },
    {
      admin: {
        position: 'sidebar',
      },
      maxDepth: 1,
      name: 'parent',
      relationTo: 'product-categories',
      type: 'relationship',
    },
    {
      defaultValue: 'default',
      name: 'display',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Products', value: 'products' },
        { label: 'Subcategories', value: 'subcategories' },
        { label: 'Both', value: 'both' },
      ],
      type: 'select',
    },
    {
      defaultValue: 0,
      name: 'menuOrder',
      type: 'number',
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
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        // Update product count for this category
        const productCount = await req.payload.count({
          collection: 'products',
          where: {
            categories: {
              contains: doc.id,
            },
          },
        });

        await req.payload.update({
          collection: 'product-categories',
          data: {
            count: productCount.totalDocs,
          },
          id: doc.id,
        });
      },
    ],
  },
  slug: 'product-categories',
  timestamps: true,
  versions: {
    drafts: false,
    maxPerDoc: 5,
  },
};

export default ProductCategories;
