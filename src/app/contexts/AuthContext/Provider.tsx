import { useLayoutEffect, useState } from 'react';

import { STORAGE_KEYS } from '@/app/constants/storageKeys';
import { useRefreshToken } from '@/app/hooks/authHooks/useRefreshToken';
import { useSignInWithCredentials } from '@/app/hooks/authHooks/useSignInWithCredentials';
import { useSignOut } from '@/app/hooks/authHooks/useSignOut';
import type { AuthService } from '@/app/service/AuthService';
import { httpClient } from '@/app/service/httpClient';

import { AuthContext, type IAuthContextValue } from './Context';

interface IAuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const [signedIn, setSignedIn] = useState(() => {
    return !!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  });
  const { signInWithCredentialsFn } = useSignInWithCredentials();
  const { refreshTokenFn } = useRefreshToken();
  const { signOutFn, isPending: signOutIsPending } = useSignOut();

  useLayoutEffect(() => {
    const interceptorId = httpClient.interceptors.request.use((config) => {
      const accessToken = JSON.parse(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN) as string);

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    return () => {
      httpClient.interceptors.request.eject(interceptorId);
    };
  }, []);

  useLayoutEffect(() => {
    const interceptorId = httpClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        const refreshToken = JSON.parse(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN) as string);

        if (originalRequest.url === '/refresh-tokens') {
          setSignedIn(false);
          localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
          localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
          return Promise.reject(error);
        }

        if (error.response?.status !== 401 || !refreshToken) {
          return Promise.reject(error);
        }

        const { refreshToken: _refreshToken, token } = await refreshTokenFn(refreshToken);
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(token));
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, JSON.stringify(_refreshToken));

        return httpClient(originalRequest);
      },
    );

    return () => {
      httpClient.interceptors.response.eject(interceptorId);
    };
  }, [refreshTokenFn]);

  async function signInWithCredentials({ email, password }: AuthService.SignInWithCredentialsInput) {
    const { token, refreshToken } = await signInWithCredentialsFn({ email, password });

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(token));
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, JSON.stringify(refreshToken));
    setSignedIn(true);
  }

  async function startSignInWithGoogle() {
    const { data } = await httpClient.get<{ authUrl: string; message: string }>('/sessions/google');

    if (!data.authUrl) {
      throw new Error('Failed to initiate Google sign-in');
    }

    window.location.href = data.authUrl;
  }

  function signInWithGoogleCallback(token: string, refreshToken: string) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(token));
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, JSON.stringify(refreshToken));
    setSignedIn(true);
  }

  async function signOut() {
    await signOutFn();
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    setSignedIn(false);
  }

  const authContextValue: IAuthContextValue = {
    signedIn,
    signInWithCredentials,
    startSignInWithGoogle,
    signInWithGoogleCallback,
    signOut,
    signOutIsPending,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
