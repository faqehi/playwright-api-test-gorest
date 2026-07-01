import { APIRequestContext, APIResponse } from '@playwright/test';

export class UserClient {
  constructor(private readonly request: APIRequestContext) { }

  async createUser(userData: Record<string, any>): Promise<APIResponse> {
    return this.request.post('/public/v2/users', {
      data: userData
    });
  }

  async getAllUsers(): Promise<APIResponse> {
    return this.request.get('/public/v2/users');
  }
}