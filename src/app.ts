import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import handleError from './errors/handleError';
import userRouter from './routes/users.routes';
import loginRouter from './routes/login.routes';

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.use(handleError);

export default app;
