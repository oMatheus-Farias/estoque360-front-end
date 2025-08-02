import { useContext } from 'react';

import { AuthContext } from '@/app/contexts/AuthContext/Context';

export function useAuth() {
  return useContext(AuthContext);
}
