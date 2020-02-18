import * as Yup from 'yup';
import Department from '../models/Department';

class DepartmentContoller {
  async index(req, res) {
    try {
      const departments = await Department.findAll();
      return res.json(departments);
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      department_name: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const department = await Department.create(req.body);
      return res.json(department);
    } catch (error) {
      return res.json(error);
    }
  }

  async update(req, res) {
    try {
      const department = await Department.findByPk(req.params.id_department);
      await department.update(req.body);
      return res.json(department);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new DepartmentContoller();
