import { useMutation } from '@tanstack/react-query';

import { AuthService } from '@/app/service/AuthService';

export function useSignInWithCredentials() {
  const { mutateAsync: signInWithCredentialsFn } = useMutation({
    mutationFn: AuthService.signInWithCredentials,
  });

  return { signInWithCredentialsFn };
}
