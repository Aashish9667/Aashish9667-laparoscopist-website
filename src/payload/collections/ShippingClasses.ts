import type { CollectionConfig } from 'payload';
import { slug } from '@/payload/fields/slug/config';
import { admin, anyone, editor, or, staff } from './helpers/access';

/**
 * The ShippingClasses collection is a simple lookup table for grouping products
 * into shipping-rate buckets and storing a base cost per class. It’s used during
 * checkout/order processing to determine shipping charges for a cart based on the classes assigned to the products.
 *
 * Key purposes
 *
 * Organize products into shipping categories (e.g., "bulky", "fragile", "standard").
 * Store a canonical cost (or base cost) for each class.
 * Make shipping rules configurable in the CMS instead of hard-coding rates.
 * Serve as input to shipping calculation logic (flat rates, per-item, per-weight, or complex rules).
 */
const ShippingClasses: CollectionConfig = {
  access: {
    admin: or(staff, editor, admin),
    create: or(editor, admin),
    delete: admin,
    read: anyone,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    defaultColumns: ['name', 'slug', 'description', 'updatedAt'],
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
      min: 0,
      name: 'cost',
      type: 'number',
    },
  ],
  slug: 'shipping-classes',
  timestamps: true,
  versions: {
    drafts: false,
    maxPerDoc: 10,
  },
};

export default ShippingClasses;
