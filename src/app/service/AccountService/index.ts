import { httpClient } from '../httpClient';

export class AccountService {
  static async meDetails() {
    const { data: responseData } = await httpClient.get<AccountService.MeDetailsOutput>('/accounts/me');

    return responseData;
  }
}

export namespace AccountService {
  export type MeDetailsRole = 'ADMIN' | 'MANAGER' | 'COLLABORATOR';
  export type MeDetailsOutput = {
    account: {
      id: string;
      email: string;
      googleId: string | null;
      role: MeDetailsRole;
      status: boolean;
      createdAt: string;
      updatedAt: string;
    };
    profile: {
      id: string;
      name: string;
      phone: string | null;
      avatar: string | null;
      createdAt: string;
      updatedAt: string;
    };
  };
}
