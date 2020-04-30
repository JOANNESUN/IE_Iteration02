const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER 
  },
  height: {
    type: Sequelize.INTEGER 
  },
  sex: {
    type: Sequelize.STRING
  }
})

module.exports = User;