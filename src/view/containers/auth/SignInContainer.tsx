import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import { env } from '@/app/config/envConfig';
import { useAuth } from '@/app/hooks/authHooks/useAuth';
import { signInSchemaValidator } from '@/app/validators/zod/auth/signInSchemaValidator';
import { SignInPage } from '@/view/pages/auth/SignIn';

export type SignInForm = z.infer<typeof signInSchemaValidator>;

export default function SignInContainer() {
  const { signInWithCredentials } = useAuth();

  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchemaValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function handleSignInWithCredentials(data: SignInForm) {
    try {
      await signInWithCredentials(data);
    } catch (error) {
      if (env.VITE_NODE_ENV !== 'production') {
        console.error(error);
      }

      toast.error('Erro ao fazer login. Verifique suas credenciais e tente novamente.', {
        description: 'Se o problema persistir, entre em contato com o suporte.',
      });

      return;
    }
  }

  return <SignInPage form={form} handleSignInWithCredentials={handleSignInWithCredentials} />;
}
