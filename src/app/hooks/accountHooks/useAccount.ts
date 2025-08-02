import { useContext } from 'react';

import { AccountContext } from '@/app/contexts/AccountContext/Context';

export function useAccount() {
  return useContext(AccountContext);
}
