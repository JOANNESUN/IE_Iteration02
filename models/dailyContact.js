const Sequelize = require('sequelize');

const db = require('../database');

module.exports = db.define('dailyContact', {
//   username: {
//     type: Sequelize.INTEGER 
//   },
  contactName: {
    type: Sequelize.STRING
  },
  contactPhone: {
    type: Sequelize.STRING
  },
  contactMessage: {
    type: Sequelize.STRING
  },
},
{
  freezeTableName: true
});