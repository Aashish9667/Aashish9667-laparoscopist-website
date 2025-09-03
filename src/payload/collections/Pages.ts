import type { CollectionConfig } from 'payload';
import { slug } from '@/payload/fields/slug/config';
import { admin, editor, or, published } from './helpers/access';

const Pages: CollectionConfig = {
  access: {
    admin: or(editor, admin),
    create: or(editor, admin),
    delete: admin,
    read: published,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    defaultColumns: ['title', 'layout', 'slug'],
    group: 'Other',
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      defaultValue: '',
      label: 'Prefix',
      name: 'prefix',
      required: false,
      type: 'text',
    },
    slug(
      { trackingField: 'title' },
      {
        required: true,
      },
    ),
  ],
  slug: 'pages',
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

export default Pages;
