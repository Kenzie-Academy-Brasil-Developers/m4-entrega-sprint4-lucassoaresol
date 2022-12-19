import AppDataSource from '../../data-source';
import User from '../../entities/user.entity';
import { IUserUpdate } from '../../interfaces/users';
import { userResponse } from '../../serializers/user.serializers';

const updateUserService = async (userData: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: id });
  const user = userRepository.create({
    ...findUser,
    ...userData,
  });
  await userRepository.save(user);
  return await userResponse.validate(user, {
    stripUnknown: true,
  });
};

export default updateUserService;
