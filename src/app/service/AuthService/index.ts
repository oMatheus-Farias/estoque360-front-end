import { httpClient } from '../httpClient';

export class AuthService {
  static async signInWithCredentials(data: AuthService.SignInWithCredentialsInput) {
    const { data: responseData } = await httpClient.post<AuthService.SignInWithCredentialsOutput>('/sessions/credentials', {
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

  static async signOut() {
    await httpClient.post('/sessions/sign-out');
  }
}

export namespace AuthService {
  export type SignInWithCredentialsInput = {
    email: string;
    password: string;
  };
  export type SignInWithCredentialsOutput = {
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
