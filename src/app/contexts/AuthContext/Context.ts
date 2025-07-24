import { createContext } from 'react';

import type { AccountService } from '@/app/service/AccountService';
import type { AuthService } from '@/app/service/AuthService';

export interface IAuthContextValue {
  signedIn: boolean;
  handleAuthenticatedWithCredentials: (data: AuthService.AuthenticatedWithCredentialsInput) => Promise<void>;
  handleLogOut: () => Promise<void>;
  meDetails: AccountService.MeDetailsOutput | undefined;
  logOutIsPending: boolean;
  meDetailsIsLoading: boolean;
}

export const AuthContext = createContext({} as IAuthContextValue);
