import { Router } from 'express';
import DepartmentController from './app/controllers/DepartmentController';

const routes = new Router();

routes.post('/department', DepartmentController.store);
routes.get('/department', DepartmentController.index);

export default routes;
