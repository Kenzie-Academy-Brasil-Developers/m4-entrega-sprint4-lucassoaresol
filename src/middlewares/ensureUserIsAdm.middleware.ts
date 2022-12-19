import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

const ensureUserIsAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.user.isAdm) {
    throw new AppError('user without permission', 403);
  }
  return next();
};

export default ensureUserIsAdmMiddleware;
