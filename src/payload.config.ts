import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { seed } from './seed';

export default buildConfig({
  serverURL: process.env.PAYLOAD_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  onInit: async (payload) => {
    if (
      process.env.NODE_ENV === 'development'
      && (process.env.PAYLOAD_SEED_DATABASE)
    ) {
      await seed(payload);
    }
  },
});
