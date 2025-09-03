import type { CollectionConfig } from 'payload';
import { admin, anyone, editor, or } from './helpers/access';

const Customers: CollectionConfig = {
  access: {
    admin: or(editor, admin),
    create: anyone,
    delete: admin,
    read: anyone,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    defaultColumns: ['email', 'firstName', 'lastName', 'totalSpent', 'orderCount', 'createdAt'],
    group: 'E-Commerce',
    useAsTitle: 'email',
  },
  auth: {
    cookies: {
      sameSite: 'Lax',
      secure: true,
    },
    tokenExpiration: 7200, // 2 hours
  },
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
      name: 'phone',
      type: 'text',
    },
    {
      name: 'dateOfBirth',
      type: 'date',
    },
    {
      fields: [
        {
          name: 'type',
          options: [
            { label: 'Billing', value: 'billing' },
            { label: 'Shipping', value: 'shipping' },
          ],
          required: true,
          type: 'select',
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
        {
          defaultValue: false,
          name: 'isDefault',
          type: 'checkbox',
        },
      ],
      name: 'addresses',
      type: 'array',
    },
    {
      admin: {
        readOnly: true,
      },
      hasMany: true,
      name: 'orders',
      relationTo: 'orders',
      type: 'relationship',
    },
    {
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      defaultValue: 0,
      name: 'orderCount',
      type: 'number',
    },
    {
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      defaultValue: 0,
      min: 0,
      name: 'totalSpent',
      type: 'number',
    },
    {
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      defaultValue: 0,
      min: 0,
      name: 'averageOrderValue',
      type: 'number',
    },
    {
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      name: 'lastOrderDate',
      type: 'date',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
  ],
  slug: 'customers',
  timestamps: true,
  versions: {
    drafts: false,
    maxPerDoc: 5,
  },
};

export default Customers;
