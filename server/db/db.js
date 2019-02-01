const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const db = new Sequelize(
  process.env.RDS_DB_NAME,
  process.env.RDS_USERNAME,
  process.env.RDS_PASSWORD,
  {
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dialect: 'postgres',
  }
);

module.exports = db;
