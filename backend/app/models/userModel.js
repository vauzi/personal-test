import { Sequelize } from 'sequelize';
import db from '../../config/database.js';

const { DataTypes } = Sequelize;

const user = db.define(
  'users',
  {
    nama_lengkap: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default user;

(async () => {
  await db.sync();
})();
