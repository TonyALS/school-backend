import Course from '../models/Course';
import CourseListService from '../services/CourseListService';

class CourseController {
  async index(req, res) {
    const courses = await CourseListService.getAllCourses();

    if (courses.count === 0) {
      return res.status(400).json({ error: 'Nenhum curso encontrado' });
    }

    return res.status(200).json(courses);
  }

  async ListClassByCourse(req, res) {
    const course_id = req.params.id_course;

    if (!(await CourseListService.searchCourseById({ course_id }))) {
      return res.status(400).json({ error: 'Curso não encontrado' });
    }
    const classByCourse = await CourseListService.getClassByCourse({
      course_id,
    });
    return res.status(200).json(classByCourse);
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
