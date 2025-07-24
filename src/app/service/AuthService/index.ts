import { httpClient } from '../httpClient';

export class AuthService {
  static async authenticatedWithCredentials(data: AuthService.AuthenticatedWithCredentialsInput) {
    const { data: responseData } = await httpClient.post<AuthService.AuthenticatedWithCredentialsOutput>('/sessions/credentials', {
      email: data.email,
      password: data.password,
    });

    return responseData;
  }

  static async refreshToken(data: AuthService.RefreshTokenInput) {
    const { data: responseData } = await httpClient.post<AuthService.RefreshTokenOutput>('/refresh-tokens', {
      refreshToken: data.refreshToken,
    });

    return responseData;
  }

  static async logOut() {
    await httpClient.post('/sessions/sign-out');
  }
}

export namespace AuthService {
  export type AuthenticatedWithCredentialsInput = {
    email: string;
    password: string;
  };
  export type AuthenticatedWithCredentialsOutput = {
    token: string;
    refreshToken: string;
  };

  export type RefreshTokenInput = {
    refreshToken: string;
  };
  export type RefreshTokenOutput = {
    token: string;
    refreshToken: string;
  };
}
