import { Link, Navigate, Outlet } from 'react-router-dom';

import { ROUTES_PATHS } from '@/app/constants/routesPaths';
import { useAuth } from '@/app/hooks/useAuth';
import authAvatars from '@/assets/authAvatars.webp';
import authImage from '@/assets/authImage.webp';
import { LogoIconWithName } from '@/view/components/LogoIconWithName';

export function AuthLayout() {
  const { signedIn } = useAuth();

  if (signedIn) {
    return <Navigate to={ROUTES_PATHS.authenticated.dashboard} replace={true} />;
  }

  return (
    <div className="bg-estoque360-primary-500 flex h-screen w-full items-center justify-center px-5 xl:px-0">
      <div className="w-full xl:flex-1">
        <div className="flex flex-col items-center gap-8">
          <LogoIconWithName />

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl font-bold text-white">Faça login na sua conta</h1>
            <p className="text-estoque360-gray-200 text-sm">Digite seu e-mail abaixo para acessar sua conta</p>
          </div>
        </div>

        <Outlet />
      </div>

      <div
        style={{
          backgroundImage: `url(${authImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="hidden h-full flex-1 select-none xl:flex xl:flex-col xl:py-5"
      >
        <div className="flex-1 px-12">
          <div className="flex h-full w-full flex-col justify-center gap-2">
            <h2 className="text-4xl font-bold text-white">Dê fim ao caos do estoque</h2>
            <p className="text-base text-white">
              Com Estoque360, você tem controle completo de produtos, movimentações e transferências entre unidades com apenas alguns cliques.
            </p>

            <div className="mt-8 ml-auto flex w-52">
              <img src={authAvatars} alt="Avatares de usuários" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-4">
          <span className="text-sm text-white">© {new Date().getFullYear()}</span>
          <Link to="#" className="hover:text-estoque360-gray-100 text-sm text-white transition-all">
            Política de privacidade
          </Link>
        </div>
      </div>
    </div>
  );
}
