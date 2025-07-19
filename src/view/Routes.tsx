import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';

import GlobalSuspense from './components/GlobalSuspense';

const Login = lazy(() => import('../view/containers/auth/LoginContainer'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<GlobalSuspense />}>
      <Routes>
        <Route path={ROUTES_PATHS.auth.login} element={<Login />} />
      </Routes>
    </Suspense>
  );
}
