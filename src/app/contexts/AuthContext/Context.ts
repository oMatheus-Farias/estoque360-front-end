import { createContext } from 'react';

import type { AccountService } from '@/app/service/AccountService';
import type { AuthService } from '@/app/service/AuthService';

export interface IAuthContextValue {
  signedIn: boolean;
  signInWithCredentials: (data: AuthService.SignInWithCredentialsInput) => Promise<void>;
  signOut: () => Promise<void>;
  meDetails: AccountService.MeDetailsOutput | undefined;
  logOutIsPending: boolean;
  meDetailsIsLoading: boolean;
}

export const AuthContext = createContext({} as IAuthContextValue);
