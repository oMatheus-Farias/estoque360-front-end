import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';
import { useAuth } from '@/app/hooks/useAuth';
import { Footer } from '@/view/components/Footer';
import { HeaderDesktop } from '@/view/components/HeaderDestktop';
import { Sidebar } from '@/view/components/Sidebar';

export function AuthenticatedLayout() {
  const { signedIn } = useAuth();

  if (!signedIn) {
    return <Navigate to={ROUTES_PATHS.auth.signIn} replace={true} />;
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex lg:hidden">Header Mobile</div>
      <div className="flex h-full">
        <Sidebar />
        <div className="flex h-full w-full flex-col lg:ml-52">
          <HeaderDesktop />
          <main className="flex-1">
            <Outlet />
          </main>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
