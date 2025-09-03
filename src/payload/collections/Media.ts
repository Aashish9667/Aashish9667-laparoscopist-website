import type { CollectionConfig } from 'payload';
import { admin, anyone, editor, or } from './helpers/access';

const Media: CollectionConfig = {
  access: {
    admin: or(editor, admin),
    create: or(editor, admin),
    delete: admin,
    read: anyone,
    readVersions: admin,
    update: or(editor, admin),
  },
  admin: {
    group: 'Media',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: true,
};

export default Media;
