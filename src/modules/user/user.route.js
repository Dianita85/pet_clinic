import express from 'express';
import {
  deleteUser,
  findAllUser,
  findOneUser,
  login,
  register,
  updateUser,
} from './user.controller.js';

import { validaExistUser } from './user.middleware.js';

export const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/', findAllUser);

router

  .route('/:id')

  .get(validaExistUser, findOneUser)

  .patch(validaExistUser, updateUser)

  .delete(validaExistUser, deleteUser);
