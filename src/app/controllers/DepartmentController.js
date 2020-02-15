import Department from '../models/Department';

class DepartmentContoller {
  async store(req, res) {
    const department = await Department.create(req.body);
    return res.json(department);
  }
}

export default new DepartmentContoller();
