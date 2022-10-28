import { Sequelize } from 'sequelize';

const db = new Sequelize('express_test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
