import Course from '../models/Course';
import SchoolClass from '../models/SchoolClass';

class CourseListService {
  async searchCourseById({ course_id }) {
    try {
      const course = await Course.findByPk(course_id);
      return course;
    } catch (error) {
      throw new Error(error);
    }
  }

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

  //  Lista as classes de um determinado curso
  async getClassByCourse({ course_id }) {
    try {
      const classByCourse = await SchoolClass.findAndCountAll({
        where: {
          course_id,
        },
        attributes: [
          'class_period',
          'student_number',
          'initial_date',
          'final_date',
        ],
        include: [
          {
            association: 'course',
            attributes: ['course_name'],
          },
        ],
      });

      return classByCourse;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new CourseListService();
