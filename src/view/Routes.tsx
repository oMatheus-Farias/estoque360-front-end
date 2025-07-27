import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';

import GlobalSuspense from './components/GlobalSuspense';
import { AuthLayout } from './pages/_layouts/AuthLayout';

// Auth
const SignIn = lazy(() => import('./containers/auth/SignInContainer'));

// Authenticated
const Dashboard = lazy(() => import('./containers/authenticated/DashboardContainer'));

export function AppRoutes() {
  return (
    <Suspense fallback={<GlobalSuspense />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES_PATHS.auth.signIn} element={<SignIn />} />
        </Route>

        <Route path={ROUTES_PATHS.authenticated.dashboard} element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
