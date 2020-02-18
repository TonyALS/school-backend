import Sequelize, { Model } from 'sequelize';

class DepartmentTeacher extends Model {
  static init(sequelize) {
    super.init(
      {
        id_department_teacher: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        department_id: {
          type: Sequelize.INTEGER,
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vazio.',
            },
          },
        },
        teacher_id: {
          type: Sequelize.INTEGER,
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vazio.',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'department_teacher',
      }
    );
    return this;
  }

  //  Um departament_teacher possui muitos professores:
  static associate(models) {
    this.belongsTo(models.Teacher, {
      foreignKey: 'teacher_id',
      as: 'teacher',
    });

    this.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department',
    });
  }
}

export default DepartmentTeacher;
