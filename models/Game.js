const Sequelize = require('sequelize');

const db = require('../database');

module.exports = db.define('game', {
  gamescore: {
    type: Sequelize.INTEGER 
  },
  datetime: {
    type: Sequelize.DATE 
  },
  userid: {
    type: Sequelize.INTEGER
  },
},
{
  freezeTableName: true
});
