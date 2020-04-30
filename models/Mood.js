const Sequelize = require('sequelize');
const db = require('../database');

const Mood = db.define('mood', {
  datetime: {
    type: Sequelize.DATE 
  },
  moodscore: {
    type: Sequelize.INTEGER 
  },
  user_id: {
    type: Sequelize.STRING
  }
})

module.exports = Mood;