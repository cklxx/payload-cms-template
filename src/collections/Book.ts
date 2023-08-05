import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Book: CollectionConfig = {
  slug: 'book',
  admin: {
    useAsTitle: 'book'
  },
  access: {
    // Payload's access control functions apply to files also, meaning you can permit or deny file downloads easily
    read: () => true,
    create: () => true,
    update: () => true
  },
  fields: [
    {
      name: 'id',
      type: 'text',
    },
    {
      name: 'frontend',
      type: 'text',
    },
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'abs',
      type: 'text',
    }
  ]
}

export default Book;
