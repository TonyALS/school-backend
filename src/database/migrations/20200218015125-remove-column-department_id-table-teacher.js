module.exports = {
  up: queryInterface => queryInterface.removeColumn('teacher', 'department_id'),

  down: queryInterface => {
    return queryInterface.addColumn('teacher', 'department_id');
  },
};
