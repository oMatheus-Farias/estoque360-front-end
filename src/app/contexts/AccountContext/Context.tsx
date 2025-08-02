import { createContext } from 'react';

import type { AccountService } from '@/app/service/AccountService';

export interface IAccountContextValue {
  meDetails: AccountService.MeDetailsOutput | undefined;
  isLoadingMeDetails: boolean;
}

export const AccountContext = createContext({} as IAccountContextValue);
