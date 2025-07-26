import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { useAuth } from '@/app/hooks/authHooks/useAuth';
import { signInSchemaValidator } from '@/app/validators/zod/auth/signInSchemaValidator';
import { SignInPage } from '@/view/pages/auth/SignIn';

export type SignInForm = z.infer<typeof signInSchemaValidator>;

export default function SignInContainer() {
  const { handleSignInWithCredentials } = useAuth();

  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchemaValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return <SignInPage form={form} handleSignInWithCredentials={handleSignInWithCredentials} />;
}
