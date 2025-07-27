import { AlertCircle, LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import type { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { toggleVisiblePassword } from '@/app/helpers/toggleVisiblePassword';
import type { AuthService } from '@/app/service/AuthService';
import { GoogleIcon } from '@/view/components/GoogleIcon';
import { Button } from '@/view/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/view/components/ui/Form';
import { Input } from '@/view/components/ui/Input';
import { Label } from '@/view/components/ui/Label';

interface ISignInPageProps {
  form: ReturnType<typeof useForm<AuthService.SignInWithCredentialsInput>>;
  handleSignInWithCredentials: (data: AuthService.SignInWithCredentialsInput) => void;
}

export function SignInPage({ form, handleSignInWithCredentials }: ISignInPageProps) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const isPending = form.formState.isSubmitting;

  return (
    <div className="mt-6 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignInWithCredentials)} className="mx-auto flex w-full max-w-[350px] flex-col gap-6">
          <FormField
            name="email"
            control={form.control}
            render={() => (
              <FormItem>
                <FormControl>
                  <Label htmlFor="email" className="flex flex-col items-start gap-2.5 text-sm text-white">
                    E-mail
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      disabled={isPending}
                      autoFocus
                      autoComplete="email"
                      autoCorrect="off"
                      spellCheck="false"
                      autoCapitalize="none"
                      aria-label="E-mail"
                      {...form.register('email')}
                      className={`${form.formState.errors.email ? 'border-rose-500 focus-visible:border-rose-500 focus-visible:ring-rose-500/50' : 'border-estoque360-gray-600'} bg-estoque360-muted-foreground-500 placeholder:text-estoque360-gray-400 h-10 w-full rounded-[10px] border px-3 text-sm text-white focus:outline-none`}
                    />
                  </Label>
                </FormControl>
                {form.formState.errors.email && (
                  <div className="flex items-center gap-2 font-light text-red-500">
                    <AlertCircle className="max-h-2.5 min-h-2.5 max-w-2.5 min-w-2.5" />
                    <FormMessage className="text-xs" />
                  </div>
                )}
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={() => (
              <FormItem>
                <FormControl>
                  <Label htmlFor="password" className="flex flex-col items-start gap-2.5 text-sm text-white">
                    <div className="flex w-full items-center justify-between">
                      <span>Senha</span>
                      <Link to="#" className="hover:text-estoque360-gray-100 transition-all">
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <div
                      className={`${form.formState.errors.password ? 'border-rose-500 has-focus-visible:ring-rose-500/50' : 'border-estoque360-gray-600 has-focus-visible:border-estoque360-detail01-500'} bg-estoque360-muted-foreground-500 has-focus:ring-estoque360-detail02-500/50 relative flex h-10 w-full items-center rounded-[10px] border pr-3 font-light has-focus:ring-[3px]`}
                    >
                      <Input
                        id="password"
                        placeholder=""
                        type={visiblePassword ? 'text' : 'password'}
                        disabled={isPending}
                        autoComplete="current-password"
                        autoCorrect="off"
                        spellCheck="false"
                        autoCapitalize="none"
                        autoFocus={false}
                        aria-label="Senha"
                        {...form.register('password')}
                        className="placeholder:text-estoque360-gray-400 h-full w-full rounded-[10px] border-none px-3 text-sm text-white focus:outline-none focus-visible:border-none focus-visible:ring-0"
                      />
                      {toggleVisiblePassword({
                        isVisible: visiblePassword,
                        setIsVisible: setVisiblePassword,
                      })}
                    </div>
                  </Label>
                </FormControl>
                {form.formState.errors.password && (
                  <div className="flex items-center gap-2 font-light text-red-500">
                    <AlertCircle className="max-h-2.5 min-h-2.5 max-w-2.5 min-w-2.5" />
                    <FormMessage className="text-xs" />
                  </div>
                )}
              </FormItem>
            )}
          />

          <div className="mt-6 flex flex-col justify-center gap-6">
            <Button
              type="submit"
              disabled={isPending}
              style={{
                background: 'var(--gradient-estoque360-primary)',
              }}
              className="h-10 w-full cursor-pointer rounded-[10px] text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(148,56,251,0.5),0_0_20px_rgba(148,56,251,0.3),0_0_30px_rgba(148,56,251,0.1)]"
            >
              {isPending ? <LoaderCircle aria-label="Carregando" className="animate-spin" /> : 'Entrar'}
            </Button>

            <div className="flex items-center justify-between gap-2">
              <div className="bg-estoque360-gray-400 h-[1px] flex-1"></div>
              <span className="text-estoque360-gray-400 text-sm">Ou continue com</span>
              <div className="bg-estoque360-gray-400 h-[1px] flex-1"></div>
            </div>

            <Button
              type="button"
              disabled={isPending}
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
      </Form>
    </div>
  );
}
