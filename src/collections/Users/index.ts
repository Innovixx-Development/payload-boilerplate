import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  admin: {
    group: 'Settings',
    useAsTitle: 'name',
  },
  auth: true,
  fields: [],
  slug: 'users',
};

export default Users;
