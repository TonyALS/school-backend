import Sequelize, { Model } from 'sequelize';

class SchoolClass extends Model {
  static init(sequelize) {
    super.init(
      {
        id_class: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        class_period: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        student_number: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        initial_date: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        final_date: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        course_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'class',
      }
    );
  }

  //  Um professor pertence a um departamento:
  static associate(models) {
    this.belongsTo(models.Course, {
      foreignKey: 'course_id',
      as: 'course',
    });
  }
}

export default SchoolClass;
