import { useMutation } from '@tanstack/react-query';

import { AuthService } from '@/app/service/AuthService';

export function useLogOut() {
  const { mutateAsync: logOutFn, isPending } = useMutation({
    mutationFn: AuthService.logOut,
  });

  return { logOutFn, isPending };
}
