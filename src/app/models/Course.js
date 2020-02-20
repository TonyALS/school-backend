import Sequelize, { Model } from 'sequelize';

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        id_course: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        course_name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        mec_authorization: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        department_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'course',
      }
    );
  }

  //  Um professor pertence a um departamento:
  static associate(models) {
    this.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department',
    });
    //  Um curso possui várias classes:
    this.hasMany(models.SchoolClass, {
      foreignKey: 'course_id',
      as: 'schoolclass',
    });
  }
}

export default Course;
