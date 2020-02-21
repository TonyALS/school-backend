import Department from '../models/Department';
import DepartmentListService from '../services/DepartmentListService';

class DepartmentContoller {
  //  Listar todos os departamentos:
  async index(req, res) {
    const departments = await DepartmentListService.getAllDepartments();

    if (departments.count === 0) {
      return res.status(400).json({ error: 'Nenhum departamento encontrado' });
    }

    return res.status(200).json(departments);
  }

  //  Listar todos os professores de um departmento:
  async ListTeacherByDepartment(req, res) {
    const department_id = req.params.id_department;

    if (
      !(await DepartmentListService.searchDepartmentById({ department_id }))
    ) {
      return res.status(400).json({ error: 'Departamento não encontrado' });
    }

    const teacherByDepartment = await DepartmentListService.getTeacherByDepartment(
      {
        department_id,
      }
    );

    return res.status(200).json(teacherByDepartment);
  }

  //  Listar todos os cursos de um departmento:
  async ListCourseByDepartment(req, res) {
    const department_id = req.params.id_department;

    if (
      !(await DepartmentListService.searchDepartmentById({ department_id }))
    ) {
      return res.status(400).json({ error: 'Departamento não encontrado' });
    }

    const courseByDepartment = await DepartmentListService.getCourseByDepartment(
      {
        department_id,
      }
    );
    return res.status(200).json(courseByDepartment);
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
    const department_id = req.params.id_department;

    if (
      !(await DepartmentListService.searchDepartmentById({ department_id }))
    ) {
      return res.status(400).json({ error: 'Departamento não encontrado' });
    }

    try {
      const department = await Department.findByPk(department_id);
      await department.update(req.body);
      return res.status(200).json(department);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new DepartmentContoller();
