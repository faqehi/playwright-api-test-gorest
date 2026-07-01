import { test, expect } from '../src/fixtures/api.fixtures';
import { lowercaseKeys } from '../src/utils/api.utils';
import { UserResponse } from '../src/api/models/user.types';

test('Scenario 1: Verify user creation and id assignment', async ({ userClient, newUserData: randomUser }) => {
    const response = await userClient.createUser(randomUser);
    expect(response.status()).toBe(201);
    
    const jsonResponse = await response.json();
    const cleanJsonResponse = lowercaseKeys(jsonResponse);
    
    expect(cleanJsonResponse.email).toBe(randomUser.email);

    const createdUser = cleanJsonResponse as UserResponse;
    
    expect(createdUser.id).toBeDefined();
    expect(createdUser.id).toBeGreaterThan(0);
});

test('Scenario 2: Verify first entry is only either active or inactive', async ({ userClient }) => {
    const response = await userClient.getAllUsers();
    expect(response.ok()).toBeTruthy();
    
    const jsonResponse = await response.json() as Record<string, any>[];
    expect(Array.isArray(jsonResponse)).toBeTruthy();
    expect(jsonResponse.length).toBeGreaterThan(0);
    
    const firstUser = lowercaseKeys(jsonResponse[0]) as UserResponse;
    
    expect(firstUser.status).toMatch(/^(active|inactive)$/i);
});