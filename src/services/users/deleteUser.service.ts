import AppDataSource from '../../data-source';
import User from '../../entities/user.entity';
import { userResponse } from '../../serializers/user.serializers';

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });
  user.isActive = false;
  await userRepository.save(user);
  return await userResponse.validate(user, { stripUnknown: true });
};

export default deleteUserService;
