import { ROUTES_PATHS } from '@/app/constants/routesPaths';

export function ErrorBoundaryFallback() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-medium">Ooops :(</h1>
        <p className="text-center">Ocorreu algum erro. Volte para a tela inicial ou entre em contato com o suporte.</p>
        <a href={ROUTES_PATHS.authenticated.dashboard} className="text-base font-bold underline transition-all duration-200 ease-linear">
          Ir para a tela inicial
        </a>
      </div>
    </div>
  );
}
