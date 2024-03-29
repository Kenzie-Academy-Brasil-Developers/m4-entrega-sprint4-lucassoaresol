import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError';
import 'dotenv/config';

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new AppError('no token', 401);
  }
  const token = authorization.split(' ')[1];
  return jwt.verify(
    token,
    process.env.SECRET_KEY,
    (err: jwt.VerifyErrors, decoded: jwt.JwtPayload) => {
      if (err) {
        throw new AppError(err.message);
      }
      req.user = {
        id: decoded.sub,
        isAdm: decoded.isAdm,
      };
      return next();
    },
  );
};

export default ensureAuthMiddleware;
