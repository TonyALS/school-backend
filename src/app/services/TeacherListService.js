import Teacher from '../models/Teacher';

class TeacherListService {
  //  Busca um professor:
  async searchTeacherById({ teacher_id }) {
    try {
      const teacher = await Teacher.findByPk(teacher_id);
      return teacher;
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
export default new TeacherListService();
