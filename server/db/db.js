const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const db = new Sequelize(
  'instaclone',
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: 'Instaclone-env.cnnhnf83mp.us-east-2.elasticbeanstalk.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: 'Amazon RDS',
    },
  }
);

module.exports = db;
