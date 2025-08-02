import { ArrowBigRight, LoaderCircle } from 'lucide-react';

import { avatarFallbackByUserName } from '@/app/helpers/avatarFallbackByUserName';
import { useAccount } from '@/app/hooks/accountHooks/useAccount';
import { useAuth } from '@/app/hooks/authHooks/useAuth';

import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';
import { Skeleton } from './ui/Skeleton';

export function AccountSettingsDropdownMenu() {
  const { meDetails, isLoadingMeDetails } = useAccount();
  const { signOut, signOutIsPending } = useAuth();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="data-[state=open]:bg-sidebar-border/50" asChild>
        <button className="hover:bg-sidebar-border/50 flex w-full min-w-0 items-center gap-2 rounded-md p-2 transition-all duration-150 ease-linear outline-none">
          {isLoadingMeDetails ? (
            <Skeleton className="h-8 w-8 rounded-full bg-gray-700" />
          ) : (
            <Avatar>
              <AvatarImage src={meDetails?.profile.avatar || ''} />
              <AvatarFallback className="text-sm">{avatarFallbackByUserName(meDetails?.profile.name || 'Usuário')}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex min-w-0 flex-1 flex-col text-start">
            <span className="text-estoque360-primary-100 w-full truncate text-sm font-medium">
              {isLoadingMeDetails ? <Skeleton className="mb-1 h-3 w-full rounded bg-gray-700" /> : meDetails?.profile.name || 'Usuário'}
            </span>
            <span className="text-estoque360-primary-300 w-full truncate text-xs font-normal">
              {isLoadingMeDetails ? <Skeleton className="h-3 w-full rounded bg-gray-700" /> : meDetails?.account.email || 'Email'}
            </span>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-between">
          Perfil
          <ArrowBigRight />
        </DropdownMenuItem>
        <DropdownMenuItem className="justify-between">
          Configurações
          <ArrowBigRight />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" aria-label="Sair" onClick={handleSignOut} disabled={signOutIsPending}>
          {signOutIsPending ? <LoaderCircle aria-label="Carregando" className="animate-spin" /> : 'Sair'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
