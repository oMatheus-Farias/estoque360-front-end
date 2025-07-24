import { useMutation } from '@tanstack/react-query';

import { AuthService } from '@/app/service/AuthService';

export function useRefreshToken() {
  const { mutateAsync: refreshTokenFn } = useMutation({
    mutationFn: AuthService.refreshToken,
  });

  return { refreshTokenFn };
}
