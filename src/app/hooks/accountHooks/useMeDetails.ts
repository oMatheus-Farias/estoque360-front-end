import { useQuery } from '@tanstack/react-query';

import { AccountService } from '@/app/service/AccountService';

export function useMeDetails() {
  const { data: meDetails, isLoading } = useQuery({
    queryKey: ['meDetails'],
    queryFn: AccountService.meDetails,
  });

  return { meDetails, isLoading };
}
