import type { CollectionConfig } from 'payload';
import { admin, anyone, customer, editor, staff, or } from './helpers/access';

const Orders: CollectionConfig = {
  access: {
    admin: or(staff, editor, admin),
    create: or(customer, editor),
    delete: admin,
    read: anyone,
    readVersions: admin,
    update: or(staff, editor, admin),
  },
  admin: {
    defaultColumns: ['orderNumber', 'customer', 'total', 'status', 'createdAt'],
    group: 'E-Commerce',
    useAsTitle: 'orderNumber',
  },
  fields: [
    {
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      name: 'orderNumber',
      required: true,
      type: 'text',
      unique: true,
    },
    {
      fields: [
        {
          name: 'email',
          required: true,
          type: 'email',
        },
        {
          name: 'firstName',
          required: true,
          type: 'text',
        },
        {
          name: 'lastName',
          required: true,
          type: 'text',
        },
        {
          name: 'phone',
          type: 'text',
        },
      ],
      name: 'customer',
      type: 'group',
    },
    {
      fields: [
        {
          name: 'firstName',
          required: true,
          type: 'text',
        },
        {
          name: 'lastName',
          required: true,
          type: 'text',
        },
        {
          name: 'company',
          type: 'text',
        },
        {
          name: 'address1',
          required: true,
          type: 'text',
        },
        {
          name: 'address2',
          type: 'text',
        },
        {
          name: 'city',
          required: true,
          type: 'text',
        },
        {
          name: 'state',
          required: true,
          type: 'text',
        },
        {
          name: 'postcode',
          required: true,
          type: 'text',
        },
        {
          name: 'country',
          required: true,
          type: 'text',
        },
      ],
      name: 'billing',
      type: 'group',
    },
    {
      fields: [
        {
          name: 'firstName',
          required: true,
          type: 'text',
        },
        {
          name: 'lastName',
          required: true,
          type: 'text',
        },
        {
          name: 'company',
          type: 'text',
        },
        {
          name: 'address1',
          required: true,
          type: 'text',
        },
        {
          name: 'address2',
          type: 'text',
        },
        {
          name: 'city',
          required: true,
          type: 'text',
        },
        {
          name: 'state',
          required: true,
          type: 'text',
        },
        {
          name: 'postcode',
          required: true,
          type: 'text',
        },
        {
          name: 'country',
          required: true,
          type: 'text',
        },
      ],
      name: 'shipping',
      type: 'group',
    },
    {
      fields: [
        {
          name: 'product',
          relationTo: 'products',
          required: true,
          type: 'relationship',
        },
        {
          min: 1,
          name: 'quantity',
          required: true,
          type: 'number',
        },
        {
          min: 0,
          name: 'price',
          required: true,
          type: 'number',
        },
        {
          min: 0,
          name: 'total',
          required: true,
          type: 'number',
        },
        {
          name: 'variation',
          type: 'json',
        },
      ],
      minRows: 1,
      name: 'items',
      type: 'array',
    },
    {
      fields: [
        {
          min: 0,
          name: 'subtotal',
          required: true,
          type: 'number',
        },
        {
          defaultValue: 0,
          min: 0,
          name: 'shippingTotal',
          type: 'number',
        },
        {
          defaultValue: 0,
          min: 0,
          name: 'taxTotal',
          type: 'number',
        },
        {
          defaultValue: 0,
          min: 0,
          name: 'discountTotal',
          type: 'number',
        },
        {
          min: 0,
          name: 'total',
          required: true,
          type: 'number',
        },
        {
          defaultValue: 'USD',
          name: 'currency',
          options: [
            { label: 'USD', value: 'USD' },
            { label: 'EUR', value: 'EUR' },
            { label: 'GBP', value: 'GBP' },
          ],
          required: true,
          type: 'select',
        },
      ],
      name: 'pricing',
      type: 'group',
    },
    {
      admin: {
        position: 'sidebar',
      },
      defaultValue: 'pending',
      name: 'status',
      options: [
        { label: 'Pending Payment', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'On Hold', value: 'on-hold' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Refunded', value: 'refunded' },
        { label: 'Failed', value: 'failed' },
      ],
      required: true,
      type: 'select',
    },
    {
      admin: {
        position: 'sidebar',
      },
      name: 'paymentMethod',
      options: [
        { label: 'Credit Card', value: 'credit_card' },
        { label: 'PayPal', value: 'paypal' },
        { label: 'Bank Transfer', value: 'bank_transfer' },
        { label: 'Cash on Delivery', value: 'cod' },
      ],
      type: 'select',
    },
    {
      admin: {
        position: 'sidebar',
      },
      defaultValue: 'pending',
      name: 'paymentStatus',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Paid', value: 'paid' },
        { label: 'Failed', value: 'failed' },
        { label: 'Refunded', value: 'refunded' },
      ],
      type: 'select',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      admin: {
        position: 'sidebar',
      },
      name: 'trackingNumber',
      type: 'text',
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' && !data.orderNumber) {
          // Generate order number
          const timestamp = Date.now();
          data.orderNumber = `ORD-${timestamp}`;
        }

        // Calculate totals if items are provided
        if (data.items && Array.isArray(data.items)) {
          const subtotal = data.items.reduce((sum, item) => {
            return sum + (item.total || 0);
          }, 0);

          if (!data.pricing) {
            data.pricing = {};
          }
          data.pricing.subtotal = subtotal;

          const shippingTotal = data.pricing.shippingTotal || 0;
          const taxTotal = data.pricing.taxTotal || 0;
          const discountTotal = data.pricing.discountTotal || 0;

          data.pricing.total = subtotal + shippingTotal + taxTotal - discountTotal;
        }

        return data;
      },
    ],
  },
  slug: 'orders',
  timestamps: true,
  versions: {
    drafts: false,
    maxPerDoc: 10,
  },
};

export default Orders;
