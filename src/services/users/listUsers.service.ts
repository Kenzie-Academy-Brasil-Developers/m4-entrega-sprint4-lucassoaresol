import AppDataSource from '../../data-source';
import User from '../../entities/user.entity';
import { listUsersResponse } from '../../serializers/user.serializers';

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  return await listUsersResponse.validate(users, {
    stripUnknown: true,
  });
};

export default listUsersService;
