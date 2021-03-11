import { Router } from 'express';
import apointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', apointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
