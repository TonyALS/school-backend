import SchoolClass from '../models/SchoolClass';

class SchoolClassListService {
  async getAllClass() {
    try {
      const classes = await SchoolClass.findAndCountAll({
        attributes: ['class_period', 'student_number'],
        include: [
          {
            association: 'course',
            attributes: ['course_name'],
          },
        ],
      });
      return classes;
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

export default new SchoolClassListService();
