const Sequelize = require('sequelize');
const db = require('../db');

const Relationship = db.define('relationship', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Relationship;
