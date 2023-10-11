import { Payload } from 'payload';

const users = [
  {
    email: 'admin@innovixx.co.uk',
    password: 'Pa$$w0rd!',
  },
];

export const seedUsers = async (payload: Payload) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const user of users) {
    // eslint-disable-next-line no-await-in-loop
    await payload.create({
      collection: 'users',
      data: user,
    });
  }

  payload.logger.info('Users seeded');
};
