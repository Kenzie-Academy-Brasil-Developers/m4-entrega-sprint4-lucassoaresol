import { Router } from 'express';
import createLoginController from '../controllers/login.controllers';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import loginRequest from '../serializers/login.serializers';

const loginRouter = Router();

loginRouter.post(
  '',
  ensureDataIsValidMiddleware(loginRequest),
  createLoginController,
);

export default loginRouter;
