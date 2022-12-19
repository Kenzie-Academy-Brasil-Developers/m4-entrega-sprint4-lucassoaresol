import { NextFunction, Request, Response } from 'express';
import ensureUserIsAdmMiddleware from './ensureUserIsAdm.middleware';

const ensureUserPermissionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!(req.params.id === req.user.id)) {
    return ensureUserIsAdmMiddleware(req, res, next);
  }
  return next();
};

export default ensureUserPermissionMiddleware;
