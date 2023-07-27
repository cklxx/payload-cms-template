import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'story',
  admin: {
    useAsTitle: 'story'
  },
  access: {
    // Payload's access control functions apply to files also, meaning you can permit or deny file downloads easily
    read: () => true,
    create: () => true,
    update: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'text',
    },
  ]
}

export default Examples;
