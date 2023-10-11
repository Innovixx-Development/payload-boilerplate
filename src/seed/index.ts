import { Payload } from 'payload';
import { seedUsers } from './users';

export const seed = async (payload: Payload) => {
  payload.logger.info('Seeding Database...');

  await seedUsers(payload);

  payload.logger.info('Seeding Complete!');
};
