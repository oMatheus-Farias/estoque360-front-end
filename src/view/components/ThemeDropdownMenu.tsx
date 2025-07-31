import { Moon, Sun, SwatchBook } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';

export function ThemeDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="data-[state=open]:bg-sidebar-border/50" asChild>
        <button className="border-border hover:bg-sidebar-border/50 flex aspect-square w-8 cursor-pointer items-center justify-center rounded-[10px] border transition-all duration-150 ease-linear outline-none">
          <SwatchBook size={16} className="text-estoque360-primary-100" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Tema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Sun />
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Moon />
          Escuro
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
