import { Router } from 'express';
import DepartmentController from './app/controllers/DepartmentController';
import TeacherController from './app/controllers/TeacherController';
import CourseController from './app/controllers/CourseController';

//  Middlewares
import validateCourseStore from './app/validators/CourseStore';
import validateTeacherStore from './app/validators/TeacherStore';

const routes = new Router();

routes.post('/departments', DepartmentController.store);
routes.get('/departments', DepartmentController.index);
routes.put('/departments/update/:id_department', DepartmentController.update);
routes.get(
  '/departments/:id_department/teachers',
  DepartmentController.getTeacherByDepartment
);
routes.get(
  '/departments/:id_department/courses',
  DepartmentController.getCourseByDepartment
);

routes.post('/teachers', validateTeacherStore, TeacherController.store);
routes.get('/teachers', TeacherController.index);
routes.put(
  '/teachers/:id_teacher',
  validateTeacherStore,
  TeacherController.update
);

routes.post('/courses', validateCourseStore, CourseController.store);
routes.get('/courses', CourseController.index);

export default routes;
