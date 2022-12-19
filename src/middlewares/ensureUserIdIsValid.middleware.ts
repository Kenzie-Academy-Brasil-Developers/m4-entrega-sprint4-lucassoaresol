import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

const ensureUserIdIsValidMiddleware =
  (schema: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const validatedData = await schema.validate(req.params.id, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.params.id = validatedData;
        return next();
      } catch (err) {
        return res.status(404).json({ message: err.errors });
      }
    };

export default ensureUserIdIsValidMiddleware;
