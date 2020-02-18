import Sequelize, { Model } from 'sequelize';

class Teacher extends Model {
  static init(sequelize) {
    super.init(
      {
        id_teacher: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        first_name: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vazio.',
            },
          },
        },
        last_name: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vazio.',
            },
          },
        },
        status: {
          type: Sequelize.BOOLEAN,
        },
        department_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'teacher',
      }
    );
  }

  //  Um professor pertence a um departamento:
  static associate(models) {
    this.hasOne(models.DepartmentTeacher, {
      foreignKey: 'teacher_id',
      as: 'teacher',
    });
  }
}

export default Teacher;
