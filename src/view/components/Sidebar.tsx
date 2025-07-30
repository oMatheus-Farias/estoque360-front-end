import { Building2 } from 'lucide-react';

import { NAVIGATION_LINKS } from '@/app/constants/navigationLinks';

import { AccountSettingsDropdownMenu } from './AccountDropdownMenu';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <aside className="bg-sidebar fixed z-10 hidden h-full w-52 flex-col px-2.5 py-4 lg:flex">
      <div className="border-sidebar-border flex w-full items-center gap-2 border-b pb-4">
        <div className="bg-estoque360-primary-900 border-estoque360-detail01-900 flex items-center justify-center rounded-md border p-3">
          <Building2 size={12} />
        </div>
        <div className="flex flex-col">
          <span className="text-estoque360-primary-100 text-sm font-medium">Nome da Matriz</span>
          <span className="text-estoque360-primary-300 text-xs font-normal">Matriz</span>
        </div>
      </div>
      <nav className="mt-10 flex w-full flex-1 flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <span className="text-chart-3 text-xs font-medium">Dashboard</span>
        {
          <NavLink to={NAVIGATION_LINKS[0].to} key={NAVIGATION_LINKS[0].to}>
            {NAVIGATION_LINKS[0].icon}
            <span className="text-sm font-medium">{NAVIGATION_LINKS[0].label}</span>
          </NavLink>
        }
        <span className="text-chart-3 text-xs font-medium">Plataforma</span>
        {NAVIGATION_LINKS.slice(1).map((link) => (
          <NavLink to={link.to} key={link.to}>
            {link.icon}
            <span className="text-sm font-medium">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <AccountSettingsDropdownMenu />
    </aside>
  );
}
