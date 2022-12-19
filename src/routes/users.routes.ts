import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from '../controllers/users.controllers';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware';
import ensureEmailIsExitsMiddleware from '../middlewares/ensureEmailIsExits.middleware';
import ensureUpdateIsValidMiddleware from '../middlewares/ensureUpdateIsValid.middleware';
import ensureUserIdIsValidMiddleware from '../middlewares/ensureUserIdIsValid.middleware';
import ensureUserIsActiveMiddleware from '../middlewares/ensureUserIsActive.middleware';
import ensureUserIsAdmMiddleware from '../middlewares/ensureUserIsAdm.middleware';
import ensureUserIsExitsMiddleware from '../middlewares/ensureUserIsExits.middleware';
import ensureUserPermissionMiddleware from '../middlewares/ensureUserPermision.middleware';
import { idParams, userRequest } from '../serializers/user.serializers';

const userRouter = Router();

userRouter.post(
  '',
  ensureDataIsValidMiddleware(userRequest),
  ensureEmailIsExitsMiddleware,
  createUserController,
);

userRouter.get(
  '',
  ensureAuthMiddleware,
  ensureUserIsAdmMiddleware,
  listUsersController,
);

userRouter.patch(
  '/:id',
  ensureAuthMiddleware,
  ensureUserIdIsValidMiddleware(idParams),
  ensureUpdateIsValidMiddleware,
  ensureUserIsExitsMiddleware,
  ensureUserPermissionMiddleware,
  updateUserController,
);

userRouter.delete(
  '/:id',
  ensureAuthMiddleware,
  ensureUserIdIsValidMiddleware(idParams),
  ensureUserIsExitsMiddleware,
  ensureUserIsActiveMiddleware,
  ensureUserIsAdmMiddleware,
  deleteUserController,
);

export default userRouter;
