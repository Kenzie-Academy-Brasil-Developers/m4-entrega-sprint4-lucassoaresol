import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

const ensureUpdateIsValidMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const updateKeys = Object.keys(req.body);
  updateKeys.forEach((el) => {
    if (el === 'id' || el === 'isAdm' || el === 'isActive') {
      throw new AppError('user', 401);
    }
  });
  return next();
};

export default ensureUpdateIsValidMiddleware;
