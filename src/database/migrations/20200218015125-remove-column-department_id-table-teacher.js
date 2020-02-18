module.exports = {
  up: queryInterface => queryInterface.removeColumn('teacher', 'department_id'),

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('teacher', 'department_id', {
      type: Sequelize.INTEGER,
      references: { model: 'department', key: 'id_department' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },
};
