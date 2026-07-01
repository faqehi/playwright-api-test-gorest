import { faker } from '@faker-js/faker';
import { CreateUserPayload } from '../api/models/user.types';

/**
 * Generates a random user payload for testing.
 * @param overrides - Optional fields to override the random data.
 */
export const generateRandomUser = (overrides?: Partial<CreateUserPayload>): CreateUserPayload => {
    const defaultUser: CreateUserPayload = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        gender: faker.helpers.arrayElement(['male', 'female']),
        status: faker.helpers.arrayElement(['active', 'inactive'])
    };

    return { ...defaultUser, ...overrides };
};