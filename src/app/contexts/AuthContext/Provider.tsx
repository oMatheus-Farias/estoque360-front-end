import { useLayoutEffect, useState } from 'react';

import { STORAGE_KEYS } from '@/app/constants/storageKeys';
import { useMeDetails } from '@/app/hooks/accountHooks/useMeDetails';
import { useAuthenticatedWithCredentials } from '@/app/hooks/authHooks/useAuthenticatedWithCredentials';
import { useLogOut } from '@/app/hooks/authHooks/useLogOut';
import { useRefreshToken } from '@/app/hooks/authHooks/useRefreshToken';
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
  const { authenticatedWithCredentialsFn } = useAuthenticatedWithCredentials();
  const { refreshTokenFn } = useRefreshToken();
  const { logOutFn, isPending: logOutIsPending } = useLogOut();
  const { meDetails, isLoading: meDetailsIsLoading } = useMeDetails();

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

  async function handleAuthenticatedWithCredentials({ email, password }: AuthService.AuthenticatedWithCredentialsInput) {
    const { token, refreshToken } = await authenticatedWithCredentialsFn({ email, password });

    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(token));
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, JSON.stringify(refreshToken));
    setSignedIn(true);
  }

  async function handleLogOut() {
    await logOutFn();
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    setSignedIn(false);
  }

  const authContextValue: IAuthContextValue = {
    signedIn,
    handleAuthenticatedWithCredentials,
    handleLogOut,
    meDetails,
    logOutIsPending,
    meDetailsIsLoading,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
