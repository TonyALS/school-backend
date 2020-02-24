import Teacher from '../models/Teacher';
import TeacherListService from '../services/TeacherListService';

class TeacherController {
  async index(req, res) {
    try {
      const teacher = await Teacher.findAll({
        attributes: ['first_name', 'last_name', 'status'],
        include: [
          {
            association: 'department',
            attributes: ['department_name'],
          },
        ],
      });
      return res.status(200).json(teacher);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async store(req, res) {
    const { first_name, last_name, status, department_id } = req.body;

    try {
      const teacher = await Teacher.create({
        first_name,
        last_name,
        status,
        department_id,
      });
      return res.status(200).json(teacher);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req, res) {
    const teacher_id = req.params.id_teacher;

    if (!(await TeacherListService.searchTeacherById({ teacher_id }))) {
      return res.status(400).json({ error: 'Professor não encontrado' });
    }

    try {
      const teacher = await Teacher.findByPk(teacher_id);
      await teacher.update(req.body);
      return res.status(200).json(teacher);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new TeacherController();
