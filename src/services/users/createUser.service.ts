import AppDataSource from '../../data-source';
import User from '../../entities/user.entity';
import { IUserRequest } from '../../interfaces/users';
import { userResponse } from '../../serializers/user.serializers';

const createUserService = async (userData: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.create(userData);
  await userRepository.save(user);
  return await userResponse.validate(user, { stripUnknown: true });
};

export default createUserService;
