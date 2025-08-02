import { useMeDetails } from '@/app/hooks/accountHooks/useMeDetails';

import { AccountContext, type IAccountContextValue } from './Context';

interface IAccountProviderProps {
  children: React.ReactNode;
}

export function AccountProvider({ children }: IAccountProviderProps) {
  const { meDetails, isLoadingMeDetails } = useMeDetails();

  const accountContextValue: IAccountContextValue = {
    meDetails,
    isLoadingMeDetails,
  };

  return <AccountContext.Provider value={accountContextValue}>{children}</AccountContext.Provider>;
}
