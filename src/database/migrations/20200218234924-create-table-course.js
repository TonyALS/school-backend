module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('course', {
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
      department_id: {
        type: Sequelize.INTEGER,
        references: { model: 'department', key: 'id_department' },
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

  down: queryInterface => queryInterface.dropTable('course'),
};
