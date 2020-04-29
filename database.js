// this file connects with database 
const Sequelize = require('sequelize');

// Option 2: Passing parameters separately (other dialects)

module.exports = new Sequelize('codegig', 'postgres', '20000926', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false, 

  pool:{
      max:5,
      min:0,
      acquire: 30000,
      idle:10000,
  }
});

