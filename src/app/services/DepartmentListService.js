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
        attributes: ['id_department', 'department_name'],
      });
      return departments;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new DepartmentListService();
