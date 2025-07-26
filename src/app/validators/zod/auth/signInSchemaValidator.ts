import { z } from 'zod';

export const signInSchemaValidator = z.object({
  email: z.email({
    message: 'E-mail inválido.',
  }),
  password: z
    .string({
      message: 'Senha é obrigatória.',
    })
    .min(8, {
      message: 'A senha deve ter no mínimo 8 caracteres.',
    }),
});
