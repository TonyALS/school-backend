import SchoolClass from '../models/SchoolClass';

class SchoolClassController {
  async index(req, res) {
    try {
      const classes = await SchoolClass.findAll({
        attributes: ['class_period', 'student_number'],
        include: [
          {
            association: 'course',
            attributes: ['course_name'],
          },
        ],
      });

      return res.json(classes);
    } catch (error) {
      return res.json(error);
    }
  }

  async store(req, res) {
    const schoolClass = await SchoolClass.create(req.body);
    return res.json(schoolClass);
  }
}

export default new SchoolClassController();
