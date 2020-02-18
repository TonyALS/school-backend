module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('department_teacher', {
      id_department_teacher: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: { model: 'department', key: 'id_department' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        references: { model: 'teacher', key: 'id_teacher' },
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

  down: queryInterface => queryInterface.dropTable('department_teacher'),
};
