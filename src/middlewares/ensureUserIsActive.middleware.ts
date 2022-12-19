import { NextFunction, Request, Response } from 'express';
import AppDataSource from '../data-source';
import User from '../entities/user.entity';
import AppError from '../errors/AppError';

const ensureUserIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: req.params.id });
  if (!user.isActive) {
    throw new AppError('disabled user');
  }
  return next();
};

export default ensureUserIsActiveMiddleware;
