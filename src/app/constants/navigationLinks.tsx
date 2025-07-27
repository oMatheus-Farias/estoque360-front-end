import { ArrowRightLeft, Boxes, LayoutDashboard, Package, Settings } from 'lucide-react';

import { NavigationLinkContainer } from '@/view/components/NavigationLinkContainer';

import { ROUTES_PATHS } from './routesPaths';

export const NAVIGATION_LINKS = [
  {
    to: ROUTES_PATHS.authenticated.dashboard,
    icon: (
      <NavigationLinkContainer>
        <LayoutDashboard className="w-2.5 text-gray-400" />
      </NavigationLinkContainer>
    ),
    label: 'Dashboard',
  },
  {
    to: ROUTES_PATHS.authenticated.products,
    icon: (
      <NavigationLinkContainer>
        <Package className="w-2.5 text-gray-400" />
      </NavigationLinkContainer>
    ),
    label: 'Produtos',
  },
  {
    to: ROUTES_PATHS.authenticated.stock,
    icon: (
      <NavigationLinkContainer>
        <Boxes className="w-2.5 text-gray-400" />
      </NavigationLinkContainer>
    ),
    label: 'Estoque',
  },
  {
    to: ROUTES_PATHS.authenticated.movements,
    icon: (
      <NavigationLinkContainer>
        <ArrowRightLeft className="w-2.5 text-gray-400" />
      </NavigationLinkContainer>
    ),
    label: 'Movimentações',
  },
  {
    to: ROUTES_PATHS.authenticated.adjustments,
    icon: (
      <NavigationLinkContainer>
        <Settings className="w-2.5 text-gray-400" />
      </NavigationLinkContainer>
    ),
    label: 'Ajustes',
  },
];
