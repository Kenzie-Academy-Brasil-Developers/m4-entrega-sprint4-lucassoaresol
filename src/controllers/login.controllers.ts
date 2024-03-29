import { Request, Response } from 'express';
import createLoginService from '../services/login/createLogin.service';

const createLoginController = async (req: Request, res: Response) => {
  const token = await createLoginService(req.body);
  return res.json({ token });
};

export default createLoginController;
