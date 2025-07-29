import { createContext } from 'react';

import type { AuthService } from '@/app/service/AuthService';

export interface IAuthContextValue {
  signedIn: boolean;
  signInWithCredentials: (data: AuthService.SignInWithCredentialsInput) => Promise<void>;
  startSignInWithGoogle: () => Promise<void>;
  signInWithGoogleCallback: (token: string, refreshToken: string) => void;
  signOut: () => Promise<void>;
  logOutIsPending: boolean;
}

export const AuthContext = createContext({} as IAuthContextValue);
