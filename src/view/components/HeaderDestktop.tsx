import { Sidebar } from 'lucide-react';

import { LogoIcon } from './LogoIcon';
import { ModeToggleTheme } from './ModeToggleTheme';
import { Separator } from './ui/Separator';

export function HeaderDesktop() {
  return (
    <header className="bg-background/80 sticky top-0 z-10 hidden max-h-[70px] min-h-[70px] w-full items-center justify-between px-5 backdrop-blur-xs lg:flex">
      <div className="flex h-6 items-center gap-4">
        <Sidebar size={16} />

        <Separator orientation="vertical" />

        <LogoIcon />

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <div className="border-border text-estoque360-primary-100 flex aspect-square w-6 items-center justify-center rounded-sm border text-sm">
            J
          </div>
          <span className="text-estoque360-primary-100 text-sm font-semibold">John Doe</span>
        </div>

        <div className="bg-sidebar-accent flex items-center justify-center rounded-full px-2 py-0.5">
          <span className="text-estoque360-primary-100 text-[9px] font-semibold uppercase">Free</span>
        </div>
      </div>

      <ModeToggleTheme />
    </header>
  );
}
