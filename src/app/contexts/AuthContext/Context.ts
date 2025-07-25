import { createContext } from 'react';

import type { AccountService } from '@/app/service/AccountService';
import type { AuthService } from '@/app/service/AuthService';

export interface IAuthContextValue {
  signedIn: boolean;
  handleSignInWithCredentials: (data: AuthService.SignInWithCredentialsInput) => Promise<void>;
  handleSignOut: () => Promise<void>;
  meDetails: AccountService.MeDetailsOutput | undefined;
  logOutIsPending: boolean;
  meDetailsIsLoading: boolean;
}

export const AuthContext = createContext({} as IAuthContextValue);
