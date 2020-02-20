module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('class', {
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
      course_id: {
        type: Sequelize.INTEGER,
        references: { model: 'course', key: 'id_course' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: queryInterface => {
    queryInterface.dropTable('class');
  },
};
