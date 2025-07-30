import { ArrowBigRight, LoaderCircle, User } from 'lucide-react';

import { useAuth } from '@/app/hooks/useAuth';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';

export function AccountSettingsDropdownMenu() {
  const { signOut, signOutIsPending } = useAuth();

  async function handleSignOut() {
    await signOut();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="hover:bg-sidebar-border/50 flex w-full items-center gap-2 rounded-md p-2 transition-all duration-150 ease-linear outline-none">
          <div className="bg-estoque360-primary-900 flex items-center justify-center rounded-full border p-3">
            <User size={12} />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-estoque360-primary-100 text-sm font-medium">John Doe</span>
            <span className="text-estoque360-primary-300 text-xs font-normal">johmdoe@email.com</span>
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
