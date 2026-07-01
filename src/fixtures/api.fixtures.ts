import { test as base } from '@playwright/test';
import { UserClient } from '../api/clients/user.client';
import { generateRandomUser } from '../utils/user.generator';
import { CreateUserPayload } from '../api/models/user.types';

type ApiFixtures = {
  userClient: UserClient;
  newUserData: CreateUserPayload;
};

export const test = base.extend<ApiFixtures>({
  userClient: async ({ request }, use) => {
    const userClient = new UserClient(request);
    await use(userClient);
  },
  newUserData: async ({ }, use) => {
    const user = generateRandomUser();
    await use(user);
  }
});

export { expect } from '@playwright/test';