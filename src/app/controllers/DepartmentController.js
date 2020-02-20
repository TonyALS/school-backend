import Department from '../models/Department';
import Teacher from '../models/Teacher';
import Course from '../models/Course';

class DepartmentContoller {
  async index(req, res) {
    try {
      const departments = await Department.findAll();
      return res.json(departments);
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }

  //  Listar todos os professores de um departmento:
  async getTeacherByDepartment(req, res) {
    try {
      const teacher = await Teacher.findAndCountAll({
        where: {
          department_id: req.params.id_department,
        },
        attributes: ['first_name', 'status'],
        include: [
          {
            association: 'department',
            attributes: ['department_name'],
          },
        ],
      });
      return res.status(200).json(teacher);
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }

  //  Listar todos os cursos de um departmento:
  async getCourseByDepartment(req, res) {
    try {
      const course = await Course.findAndCountAll({
        where: {
          department_id: req.params.id_department,
        },
        attributes: ['course_name', 'mec_authorization'],
        include: [
          {
            association: 'department',
            attributes: ['department_name'],
          },
        ],
      });
      return res.status(200).json(course);
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }

  async store(req, res) {
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
