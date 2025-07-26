import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';

import GlobalSuspense from './components/GlobalSuspense';

const SignIn = lazy(() => import('./containers/auth/SignInContainer'));

export function AppRoutes() {
  return (
    <Suspense fallback={<GlobalSuspense />}>
      <Routes>
        <Route path={ROUTES_PATHS.auth.signIn} element={<SignIn />} />
      </Routes>
    </Suspense>
  );
}
