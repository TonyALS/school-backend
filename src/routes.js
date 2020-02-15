import { Router } from 'express';
import DepartmentController from './app/controllers/DepartmentController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ ok: true });
});
routes.post('/department', DepartmentController.store);

export default routes;
