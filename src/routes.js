import { Router } from 'express';
import DepartmentController from './app/controllers/DepartmentController';
import TeacherController from './app/controllers/TeacherController';
import CourseController from './app/controllers/CourseController';
import SchoolClassController from './app/controllers/SchoolClassController';

//  Middlewares
import validateCourseStore from './app/validators/CourseStore';
import validateTeacherStore from './app/validators/TeacherStore';
import validateDepartmentStore from './app/validators/DepartmentStore';

const routes = new Router();

routes.post(
  '/departments',
  validateDepartmentStore,
  DepartmentController.store
);
routes.put(
  '/departments/update/:id_department',
  validateDepartmentStore,
  DepartmentController.update
);
routes.get('/departments', DepartmentController.index);
routes.get(
  '/departments/:id_department/teachers',
  DepartmentController.ListTeacherByDepartment
);
routes.get(
  '/departments/:id_department/courses',
  DepartmentController.ListCourseByDepartment
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
routes.get('/courses/:id_course/classes', CourseController.ListClassByCourse);

routes.post('/classes', SchoolClassController.store);
routes.get('/classes', SchoolClassController.index);

export default routes;
