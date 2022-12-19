import * as yup from 'yup';
import { SchemaOf, StringSchema, ArraySchema } from 'yup';
import { IUser, IUserRequest } from '../interfaces/users';

const userRequest: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const userResponse: SchemaOf<IUser> = yup.object().shape({
  createdAt: yup.date().notRequired(),
  email: yup.string().email().notRequired(),
  id: yup.string().uuid().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().notRequired(),
  name: yup.string().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const listUsersResponse: ArraySchema<SchemaOf<IUser>> = yup.array(userResponse);

const idParams: StringSchema = yup.string().uuid().required();

export { userRequest, userResponse, listUsersResponse, idParams };
