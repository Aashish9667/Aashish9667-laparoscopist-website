import type { CollectionConfig } from 'payload';
import { admin, editor, or, published } from './helpers/access';

const Coupons: CollectionConfig = {
  access: {
    admin: or(editor, admin),
    create: or(editor, admin),
    delete: admin,
    read: published,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    defaultColumns: ['code', 'type', 'amount', 'usageCount', 'expiryDate', 'enabled'],
    group: 'E-Commerce',
    useAsTitle: 'code',
  },
  fields: [
    {
      name: 'code',
      required: true,
      type: 'text',
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'type',
      options: [
        { label: 'Fixed Amount', value: 'fixed_cart' },
        { label: 'Percentage', value: 'percentage' },
        { label: 'Fixed Product', value: 'fixed_product' },
      ],
      required: true,
      type: 'select',
    },
    {
      min: 0,
      name: 'amount',
      required: true,
      type: 'number',
    },
    {
      defaultValue: false,
      name: 'freeShipping',
      type: 'checkbox',
    },
    {
      name: 'expiryDate',
      type: 'date',
    },
    {
      min: 0,
      name: 'minimumAmount',
      type: 'number',
    },
    {
      min: 0,
      name: 'maximumAmount',
      type: 'number',
    },
    {
      defaultValue: false,
      name: 'individualUse',
      type: 'checkbox',
    },
    {
      defaultValue: false,
      name: 'excludeSaleItems',
      type: 'checkbox',
    },
    {
      hasMany: true,
      name: 'products',
      relationTo: 'products',
      type: 'relationship',
    },
    {
      hasMany: true,
      name: 'excludedProducts',
      relationTo: 'products',
      type: 'relationship',
    },
    {
      hasMany: true,
      name: 'productCategories',
      relationTo: 'product-categories',
      type: 'relationship',
    },
    {
      hasMany: true,
      name: 'excludedCategories',
      relationTo: 'product-categories',
      type: 'relationship',
    },
    {
      min: 0,
      name: 'usageLimit',
      type: 'number',
    },
    {
      min: 0,
      name: 'usageLimitPerUser',
      type: 'number',
    },
    {
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      defaultValue: 0,
      name: 'usageCount',
      type: 'number',
    },
    {
      admin: {
        position: 'sidebar',
      },
      defaultValue: true,
      name: 'enabled',
      type: 'checkbox',
    },
  ],
  slug: 'coupons',
  timestamps: true,
};

export default Coupons;
