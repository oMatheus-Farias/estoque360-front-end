import { useMutation } from '@tanstack/react-query';

import { AuthService } from '@/app/service/AuthService';

export function useAuthenticatedWithCredentials() {
  const { mutateAsync: authenticatedWithCredentialsFn } = useMutation({
    mutationFn: AuthService.authenticatedWithCredentials,
  });

  return { authenticatedWithCredentialsFn };
}
