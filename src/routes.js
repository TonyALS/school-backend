import { Router } from 'express';
import DepartmentController from './app/controllers/DepartmentController';
import TeacherController from './app/controllers/TeacherController';
import DepartmentTeacherController from './app/controllers/DepartmentTeacherController';

const routes = new Router();

routes.post('/departments', DepartmentController.store);
routes.get('/departments', DepartmentController.index);

routes.post('/teachers', TeacherController.store);
routes.get('/teachers', TeacherController.index);

routes.post('/departmentteacher', DepartmentTeacherController.store);
routes.get('/departmentteacher', DepartmentTeacherController.index);

export default routes;
