const Sequelize = require('sequelize');
const db = require('../database');

const Game = db.define('game', {
  gamescore: {
    type: Sequelize.INTEGER 
  },
  datetime: {
    type: Sequelize.DATE 
  },
  user_id: {
    type: Sequelize.STRING
  }
})

module.exports = Game;