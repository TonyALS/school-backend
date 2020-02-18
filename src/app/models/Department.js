import Sequelize, { Model } from 'sequelize';

class Department extends Model {
  static init(sequelize) {
    super.init(
      {
        id_department: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        department_name: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              msg: 'Campo não pode ser vazio.',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'department',
      }
    );
    return this;
  }

  //  Um departamento possui vários professores:
  static associate(models) {
    this.hasOne(models.DepartmentTeacher, {
      foreignKey: 'department_id',
      as: 'department',
    });
  }
}

export default Department;
