const Sequelize = require('sequelize');
const db = require('../database');

const Mood = db.define('mood', {
  datetime: {
    type: Sequelize.DATE 
  },
  moodscore: {
    type: Sequelize.INTEGER 
  },
  id: {
    type: Sequelize.INTEGER
  }
})

module.exports = Mood;