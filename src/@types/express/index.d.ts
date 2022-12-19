import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        id: sprint;
        isAdm: boolean;
      };
    }
  }
}
