import Course from '../models/Course';
import CourseListService from '../services/CourseListService';
import SchoolClassListService from '../services/SchoolClassListService';

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
    const classByCourse = await SchoolClassListService.getClassByCourse({
      course_id,
    });
    return res.status(200).json(classByCourse);
  }

  async getCourse(req, res) {
    const course_id = req.params.id_course;
    const course = await CourseListService.searchCourseById({ course_id });
    return res.status(200).json(course);
  }

  async store(req, res) {
    try {
      const courseExists = await Course.findOne({
        where: {
          course_name: req.body.course_name,
        },
      });
      if (courseExists) {
        return res.status(400).json({
          error: 'Curso já cadastrado na plataforma.',
        });
      }
      await Course.create(req.body);
      return res.status(200).json({
        success: 'Cadastro realizado com sucesso',
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {
      const course = await Course.findByPk(req.params.id_course);
      await course.destroy();
      return res.status(200).json({
        success: 'Curso excluído com sucesso',
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Não foi possível atender à solicitação.',
      });
    }
  }

  async update(req, res) {
    try {
      const course = await Course.findByPk(req.params.id_course);
      await course.update(req.body);
      return res.status(200).json({
        success: 'Registro atualizado com sucesso!',
      });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(500).json({
          error: 'Curso já cadastrado na plataforma',
        });
      }
      return res.status(500).json({
        error: 'Não foi possível atender à solicitação.',
      });
    }
  }
}

export default new CourseController();
