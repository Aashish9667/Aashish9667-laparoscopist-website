import type { CollectionConfig } from 'payload';
import { slug } from '@/payload/fields/slug/config';
import { admin, editor, or, published, staff } from './helpers/access';

const Products: CollectionConfig = {
  access: {
    admin: or(staff, editor, admin),
    create: or(editor, admin),
    delete: admin,
    read: published,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    defaultColumns: ['title', 'price', 'stock', 'status', 'updatedAt'],
    group: 'E-Commerce',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
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
      required: true,
      type: 'richText',
    },
    {
      maxLength: 200,
      name: 'shortDescription',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      relationTo: 'media',
      type: 'upload',
    },
    {
      fields: [
        {
          name: 'image',
          relationTo: 'media',
          required: true,
          type: 'upload',
        },
      ],
      name: 'gallery',
      type: 'array',
    },
    {
      fields: [
        {
          min: 0,
          name: 'price',
          required: true,
          type: 'number',
        },
        {
          min: 0,
          name: 'salePrice',
          type: 'number',
        },
        {
          defaultValue: 'INR',
          name: 'currency',
          options: [{ label: 'INR', value: 'INR' }],
          required: true,
          type: 'select',
        },
      ],
      name: 'pricing',
      type: 'group',
    },
    {
      fields: [
        {
          name: 'sku',
          required: true,
          type: 'text',
          unique: true,
        },
        {
          defaultValue: 0,
          min: 0,
          name: 'stock',
          type: 'number',
        },
        {
          defaultValue: true,
          name: 'manageStock',
          type: 'checkbox',
        },
        {
          defaultValue: 'instock',
          name: 'stockStatus',
          options: [
            { label: 'In Stock', value: 'instock' },
            { label: 'Out of Stock', value: 'outofstock' },
            { label: 'Backorder', value: 'backorder' },
          ],
          required: true,
          type: 'select',
        },
        {
          defaultValue: 5,
          min: 0,
          name: 'lowStockThreshold',
          type: 'number',
        },
      ],
      name: 'inventory',
      type: 'group',
    },
    {
      fields: [
        {
          min: 0,
          name: 'weight',
          type: 'number',
        },
        {
          fields: [
            {
              min: 0,
              name: 'length',
              type: 'number',
            },
            {
              min: 0,
              name: 'width',
              type: 'number',
            },
            {
              min: 0,
              name: 'height',
              type: 'number',
            },
          ],
          name: 'dimensions',
          type: 'group',
        },
        {
          name: 'shippingClass',
          relationTo: 'shipping-classes',
          type: 'relationship',
        },
      ],
      name: 'shipping',
      type: 'group',
    },
    {
      hasMany: true,
      name: 'categories',
      relationTo: 'product-categories',
      required: true,
      type: 'relationship',
    },
    {
      hasMany: true,
      name: 'tags',
      relationTo: 'product-tags',
      type: 'relationship',
    },
    {
      fields: [
        {
          name: 'name',
          required: true,
          type: 'text',
        },
        {
          name: 'value',
          required: true,
          type: 'text',
        },
        {
          defaultValue: true,
          name: 'visible',
          type: 'checkbox',
        },
      ],
      name: 'attributes',
      type: 'array',
    },
    {
      fields: [
        {
          name: 'attribute',
          required: true,
          type: 'text',
        },
        {
          fields: [
            {
              name: 'name',
              required: true,
              type: 'text',
            },
            {
              min: 0,
              name: 'price',
              type: 'number',
            },
            {
              min: 0,
              name: 'stock',
              type: 'number',
            },
            {
              name: 'sku',
              type: 'text',
            },
          ],
          name: 'options',
          type: 'array',
        },
      ],
      name: 'variations',
      type: 'array',
    },
    {
      admin: {
        position: 'sidebar',
      },
      defaultValue: false,
      name: 'featured',
      type: 'checkbox',
    },
    {
      hasMany: true,
      maxDepth: 1,
      name: 'relatedProducts',
      relationTo: 'products',
      type: 'relationship',
    },
    {
      hasMany: true,
      maxDepth: 1,
      name: 'crossSells',
      relationTo: 'products',
      type: 'relationship',
    },
    {
      hasMany: true,
      maxDepth: 1,
      name: 'upSells',
      relationTo: 'products',
      type: 'relationship',
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate SKU if not provided
        if (!data.inventory?.sku && data.title) {
          const timestamp = Date.now().toString().slice(-6);
          data.inventory.sku = `${data.title.toUpperCase().replace(/\s+/g, '')}-${timestamp}`;
        }
        return data;
      },
    ],
  },
  slug: 'products',
  timestamps: true,
  versions: {
    drafts: {
      autosave: false,
      schedulePublish: true,
      validate: true,
    },
    maxPerDoc: 5,
  },
};

export default Products;
