import Course from '../models/Course';

class CourseListService {
  //  Busca um curso:
  async searchCourseById({ course_id }) {
    try {
      const course = await Course.findByPk(course_id);
      return course;
    } catch (error) {
      throw new Error(error);
    }
  }

  //  Lista todos os cursos:
  async getAllCourses() {
    try {
      const courses = await Course.findAndCountAll({
        attributes: ['course_name', 'mec_authorization'],
        include: [
          {
            association: 'department',
            attributes: ['department_name'],
          },
        ],
      });
      return courses;
    } catch (error) {
      throw new Error(error);
    }
  }

  //  Listar todos os cursos de um departmento:
  async getCourseByDepartment({ department_id }) {
    try {
      const courseByDepartment = await Course.findAll({
        where: {
          department_id,
        },
        attributes: ['course_name', 'mec_authorization'],
        include: [
          {
            association: 'department',
            attributes: ['department_name'],
          },
        ],
      });
      return courseByDepartment;
    } catch (erro) {
      throw new Error(erro);
    }
  }
}

export default new CourseListService();
