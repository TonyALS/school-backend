import { Router } from 'express';
import DepartmentController from './app/controllers/DepartmentController';
import TeacherController from './app/controllers/TeacherController';
import CourseController from './app/controllers/CourseController';

const routes = new Router();

routes.post('/departments', DepartmentController.store);
routes.get('/departments', DepartmentController.index);
routes.put('/departments/:id_department', DepartmentController.update);

routes.post('/teachers', TeacherController.store);
routes.get('/teachers', TeacherController.index);
routes.put('/teachers/:id_teacher', TeacherController.update);

routes.post('/courses', CourseController.store);
routes.get('/courses', CourseController.index);

export default routes;
