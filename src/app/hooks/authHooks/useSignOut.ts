import { useMutation } from '@tanstack/react-query';

import { AuthService } from '@/app/service/AuthService';

export function useSignOut() {
  const { mutateAsync: signOutFn, isPending } = useMutation({
    mutationFn: AuthService.signOut,
  });

  return { signOutFn, isPending };
}
