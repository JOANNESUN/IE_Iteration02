const Sequelize = require('sequelize');
const db = require('../database');

const Game = db.define('game', {
  gamescore: {
    type: Sequelize.INTEGER 
  },
  datetime: {
    type: Sequelize.DATE 
  },
  id: {
    type: Sequelize.INTEGER
  }
})

module.exports = Game;