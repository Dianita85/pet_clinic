import { DataTypes, Sequelize } from 'sequelize';
import { Sequelize } from './../../config/database/database.js';

const Error = SequelizeMethod.define('errors', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Error;
