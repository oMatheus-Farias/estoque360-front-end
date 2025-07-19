import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';

const Login = lazy(() => import('../view/containers/auth/LoginContainer'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES_PATHS.login} element={<Login />} />
    </Routes>
  );
}
