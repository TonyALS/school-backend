import Sequelize from 'sequelize';

//  Models para conexão:
import Department from '../app/models/Department';
import Teacher from '../app/models/Teacher';

import databaseConfig from '../config/database';

const models = [Department, Teacher];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
