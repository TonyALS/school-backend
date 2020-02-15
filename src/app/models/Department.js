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
        },
      },
      {
        sequelize,
        tableName: 'department',
      }
    );
    return this;
  }
}

export default Department;
