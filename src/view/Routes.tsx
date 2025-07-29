import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';

import GlobalSuspense from './components/GlobalSuspense';
import { AuthenticatedLayout } from './pages/_layouts/AuthenticatedLayout';
import { AuthLayout } from './pages/_layouts/AuthLayout';

// Auth
const SignIn = lazy(() => import('./containers/auth/SignInContainer'));
const GoogleCallback = lazy(() => import('./containers/auth/GoogleCallbackContainer'));

// Authenticated
const Dashboard = lazy(() => import('./containers/authenticated/DashboardContainer'));
const Products = lazy(() => import('./containers/authenticated/ProductsContainer'));
const Stock = lazy(() => import('./containers/authenticated/StockContainer'));
const Movements = lazy(() => import('./containers/authenticated/MovementsContainer'));
const Adjustments = lazy(() => import('./containers/authenticated/AdjustmentsContainer'));

export function AppRoutes() {
  return (
    <Suspense fallback={<GlobalSuspense />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES_PATHS.auth.signIn} element={<SignIn />} />
          <Route path={ROUTES_PATHS.auth.googleCallback} element={<GoogleCallback />} />
        </Route>

        <Route element={<AuthenticatedLayout />}>
          <Route path={ROUTES_PATHS.authenticated.dashboard} element={<Dashboard />} />
          <Route path={ROUTES_PATHS.authenticated.products} element={<Products />} />
          <Route path={ROUTES_PATHS.authenticated.stock} element={<Stock />} />
          <Route path={ROUTES_PATHS.authenticated.movements} element={<Movements />} />
          <Route path={ROUTES_PATHS.authenticated.adjustments} element={<Adjustments />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
