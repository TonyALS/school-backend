import Teacher from '../models/Teacher';
import Department from '../models/Department';

class DepartmentListService {
  //  Busca um departmento:
  async searchDepartmentById({ department_id }) {
    try {
      const department = await Department.findByPk(department_id);
      return department;
    } catch (error) {
      throw new Error(error);
    }
  }

  //  Listar todos os departamentos:
  async getAllDepartments() {
    try {
      const departments = await Department.findAndCountAll({
        attributes: ['department_name'],
      });
      return departments;
    } catch (error) {
      throw new Error(error);
    }
  }

  //  Listar todos os professores de um departmento:
  async getTeacherByDepartment({ department_id }) {
    try {
      const teacherByDepartment = await Teacher.findAll({
        where: {
          department_id,
        },
        attributes: ['first_name', 'status'],
        include: [
          {
            association: 'department',
            attributes: ['department_name'],
          },
        ],
      });
      return teacherByDepartment;
    } catch (erro) {
      throw new Error(erro);
    }
  }
}

export default new DepartmentListService();
