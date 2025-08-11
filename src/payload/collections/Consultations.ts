import type { CollectionConfig } from 'payload'
import { admin, anyone, editor } from './helpers/access'

const Consultations: CollectionConfig = {
  access: {
    admin: editor,
    create: anyone,
    delete: admin,
    read: editor,
    update: editor,
  },
  admin: {
    defaultColumns: ['name', 'status', 'createdAt', 'updatedAt'],
    group: 'Form',
    listSearchableFields: ['name', 'email', 'phone', 'status'],
    useAsTitle: 'name',
  },
  fields: [
    {
      label: 'Full Name',
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      label: 'Email Address',
      name: 'email',
      required: true,
      type: 'email',
    },
    {
      label: 'Phone Number',
      name: 'phone',
      required: true,
      type: 'text',
    },
    {
      label: 'Organization/Company',
      name: 'organization',
      type: 'text',
    },
    {
      label: 'Practice Area',
      name: 'practiceArea',
      options: [
        'Constitutional Law',
        'Criminal Law & Economic Offences',
        'Insolvency & Commercial Disputes',
        'Banking & Contracts',
        'Infrastructure & Electricity',
        'Real Estate & Revenue',
        'Consumer & Family Law',
        'Arbitration & Mediation',
        'Other',
      ],
      required: true,
      type: 'select',
    },
    {
      label: 'Urgency Level',
      name: 'urgency',
      options: [
        'Routine Consultation',
        'Priority Matter',
        'Urgent - Within 48 hours',
        'Emergency - Same Day',
      ],
      required: true,
      type: 'select',
    },
    {
      label: 'Case Type/Nature of Matter',
      name: 'caseType',
      required: true,
      type: 'text',
    },
    {
      label: 'Detailed Description',
      name: 'description',
      required: true,
      type: 'textarea',
    },
    {
      label: 'Preferred Consultation Date',
      name: 'preferredDate',
      type: 'date',
    },
    {
      label: 'How did you hear about me?',
      name: 'referralSource',
      type: 'text',
    },
    {
      access: {
        create: editor,
        read: editor,
        update: editor,
      },
      admin: {
        condition: () => true,
        position: 'sidebar',
        readOnly: false,
      },
      defaultValue: () => 'new',
      label: 'Status',
      name: 'status',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Review', value: 'in_review' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Closed', value: 'closed' },
      ],
      required: false,
      type: 'select',
    },
  ],
  labels: {
    plural: 'Consultations',
    singular: 'Consultation',
  },
  slug: 'consultations',
}

export default Consultations
