import { Link } from 'react-router-dom';

import authAvatars from '@/assets/authAvatars.webp';
import authImage from '@/assets/authImage.webp';
import { GoogleIcon } from '@/view/components/GoogleIcon';
import { LogoIcon } from '@/view/components/LogoIcon';
import { Button } from '@/view/components/ui/Button';
import { Input } from '@/view/components/ui/Input';
import { Label } from '@/view/components/ui/Label';

export function LoginPage() {
  return (
    <div className="bg-estoque360-primary-500 flex h-screen w-full items-center justify-center px-5 xl:px-0">
      <div className="w-full xl:flex-1">
        <div className="flex flex-col items-center gap-8">
          <LogoIcon />

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl font-bold text-white">Faça login na sua conta</h1>
            <p className="text-estoque360-gray-200 text-sm">Digite seu e-mail abaixo para acessar sua conta</p>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form className="mx-auto flex w-full max-w-[350px] flex-col gap-6">
            <Label htmlFor="email" className="flex flex-col items-start gap-2.5 text-sm text-white">
              E-mail
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="border-estoque360-gray-600 bg-estoque360-muted-foreground-500 placeholder:text-estoque360-gray-400 focus:border-estoque360-primary-500 h-10 w-full rounded-[10px] border px-3 text-sm text-white focus:outline-none"
              />
            </Label>

            <Label htmlFor="password" className="flex flex-col items-start gap-2.5 text-sm text-white">
              <div className="flex w-full items-center justify-between">
                <span>Senha</span>
                <Link to="#" className="hover:text-estoque360-gray-100 transition-all">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder=""
                className="border-estoque360-gray-600 bg-estoque360-muted-foreground-500 placeholder:text-estoque360-gray-400 focus:border-estoque360-primary-500 h-10 w-full rounded-[10px] border px-3 text-sm text-white focus:outline-none"
              />
            </Label>

            <div className="mt-6 flex flex-col justify-center gap-6">
              <Button
                type="submit"
                style={{
                  background: 'var(--gradient-estoque360-primary)',
                }}
                className="h-10 w-full cursor-pointer rounded-[10px] text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(148,56,251,0.5),0_0_20px_rgba(148,56,251,0.3),0_0_30px_rgba(148,56,251,0.1)]"
              >
                Entrar
              </Button>

              <div className="flex items-center justify-between gap-2">
                <div className="bg-estoque360-gray-400 h-[1px] flex-1"></div>
                <span className="text-estoque360-gray-400 text-sm">Ou continue com</span>
                <div className="bg-estoque360-gray-400 h-[1px] flex-1"></div>
              </div>

              <Button
                type="submit"
                className="border-estoque360-gray-600 bg-estoque360-muted-foreground-500 hover:bg-estoque360-muted-foreground-500/40 flex h-10 w-full cursor-pointer items-center gap-2 rounded-[10px] border transition-all duration-200"
              >
                <GoogleIcon />
                Login com Google
              </Button>
            </div>

            <Link to="#" className="hover:text-estoque360-gray-100 mt-8 text-center text-sm text-white transition-all">
              Não possui uma conta? Registre-se
            </Link>
          </form>
        </div>
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
            <h2 className="text-4xl font-bold text-white">Dê fim ao caos do estoque.</h2>
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
