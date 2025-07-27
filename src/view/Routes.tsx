import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';

import GlobalSuspense from './components/GlobalSuspense';
import { AuthLayout } from './pages/_layouts/AuthLayout';

const SignIn = lazy(() => import('./containers/auth/SignInContainer'));

export function AppRoutes() {
  return (
    <Suspense fallback={<GlobalSuspense />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES_PATHS.auth.signIn} element={<SignIn />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
