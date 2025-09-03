import type { CollectionConfig } from 'payload';
import { admin, anyone, editor, or } from './helpers/access';

const Users: CollectionConfig = {
  access: {
    admin: or(editor, admin),
    create: admin,
    delete: admin,
    read: anyone,
    readVersions: admin,
    unlock: admin,
    update: or(editor, admin),
  },
  admin: {
    group: 'Settings',
    useAsTitle: 'displayName',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      label: 'First Name',
      name: 'firstName',
      required: true,
      type: 'text',
    },
    {
      label: 'Middle Name',
      name: 'middleName',
      required: false,
      type: 'text',
    },
    {
      label: 'Last Name',
      name: 'lastName',
      required: false,
      type: 'text',
    },
    {
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            const names = [data?.firstName, data?.middleName, data?.lastName]
              .filter(Boolean)
              .join(' ');
            return (names && names.trim()) || data?.email || '';
          },
        ],
      },
      name: 'displayName',
      required: false,
      type: 'text',
    },
    {
      access: {
        read: ({ req }) => !!req.user && req.user?.collection === 'users',
        update: ({ req }) => {
          if (req.user?.collection === 'users') {
            return req.user?.role === 'admin';
          }
          return false;
        },
      },
      defaultValue: 'editor',
      label: 'Role',
      name: 'role',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Staff',
          value: 'staff',
        },
      ],
      required: true,
      type: 'select',
    },
  ],
  slug: 'users',
};

export default Users;
