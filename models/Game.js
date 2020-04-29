const Sequelize = require('sequelize');
const db = require('../database');

const Game = db.define('game', {
  gamescore: {
    type: Sequelize.STRING
  },
  datetime: {
    type: Sequelize.STRING
  }
})

module.exports = Game;