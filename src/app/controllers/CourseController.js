import Course from '../models/Course';

class CourseController {
  async index(req, res) {
    try {
      const courses = await Course.findAll({
        attributes: ['course_name', 'mec_authorization'],
        include: [
          {
            association: 'department',
            attributes: ['department_name'],
          },
        ],
      });

      return res.json(courses);
    } catch (error) {
      return res.json(error);
    }
  }

  async store(req, res) {
    try {
      const course = await Course.create(req.body);
      return res.json(course);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new CourseController();
