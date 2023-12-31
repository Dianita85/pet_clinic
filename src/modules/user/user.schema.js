//validaciones

import z, { boolean } from 'zod';
import { extracValidationData } from '../../common/utils/extractErrorData.js';

const registerSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'name must be a string',

      required_error: 'name is required',
    })

    .min(3, { message: 'Name is too short' })
    .max(50, { message: 'Name is too long' }),

  surname: z
    .string()
    .min(3, { message: 'Surname is too short' })
    .max(50, { message: 'Surname is too long' }),

  email: z.string().email({ message: 'Invalid email' }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(16, { message: 'Password is too long' }),

  dni: z
    .string()
    .min(10, { message: 'dni is too short' })
    .max(15, { message: 'dni is too long' }),

  genre: z.enum(['male', 'female', 'other']),

  role: z.enum(['recepionist', 'client', 'developer']),

  birthdate: z.string(),
});

export function validateUser(data) {
  const result = registerSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: userData,
  } = extracValidationData(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
}

export function validatePartialUser(data) {
  const result = registerSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: userData,
  } = extracValidationData(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
}
