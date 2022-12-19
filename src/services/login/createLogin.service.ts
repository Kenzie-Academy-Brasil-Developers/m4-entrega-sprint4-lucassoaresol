import { compareSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import AppDataSource from '../../data-source';
import User from '../../entities/user.entity';
import AppError from '../../errors/AppError';
import { IUserLogin } from '../../interfaces/users';
import 'dotenv/config';

const createLoginService = async (userLogin: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email: userLogin.email });
  if (!user) {
    throw new AppError('wrong email or password', 403);
  }
  const passwordMatch = compareSync(userLogin.password, user.password);
  if (!passwordMatch) {
    throw new AppError('wrong email or password', 403);
  }
  return jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY,
    { expiresIn: '24h', subject: user.id },
  );
};

export default createLoginService;
