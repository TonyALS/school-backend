import DepartmentTeacher from '../models/DepartmentTeacher';

class DepartmentTeacherController {
  async index(req, res) {
    try {
      const deptTeacher = await DepartmentTeacher.findAll({
        attributes: [],
        include: [
          {
            association: 'teacher',
            attributes: ['first_name', 'last_name'],
          },
          {
            association: 'department',
            attributes: ['department_name'],
          },
        ],
      });
      return res.status(200).json(deptTeacher);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async store(req, res) {
    const { department_id, teacher_id } = req.body;

    //  Verificar se o professor já está cadastrado na tabela DepartmentTeacher:
    const deptConflict = await DepartmentTeacher.findOne({
      where: {
        teacher_id,
      },
      include: [
        {
          association: 'department',
          attributes: ['department_name'],
        },
      ],
    });

    //  Se o ID do professor estiver na tabela significa que ele já está vinculado a um
    //  departamento:
    if (deptConflict) {
      return res.status(400).json({
        erro: `Professor já vinculado ao departamento: ${deptConflict.department.department_name}`,
      });
    }

    try {
      await DepartmentTeacher.create({
        department_id,
        teacher_id,
      });
      return res.status(200).json({ department_id, teacher_id });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new DepartmentTeacherController();
