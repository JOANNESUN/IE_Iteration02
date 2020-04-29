const Sequelize = require('sequelize');
const db = require('../database');

const Mood = db.define('mood', {
  datetime: {
    type: Sequelize.STRING
  },
  moodscore: {
    type: Sequelize.STRING
  }
})

module.exports = Mood;