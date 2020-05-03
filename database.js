// this module creates connection 
const Sequelize = require('sequelize');

const config = require('config'); //loading config module not folder module

// console.log(config.get("database"));// do this to test if the value is connected 

const database = config.get("database");

const password = config.get("password");

const owner = config.get("owner");

module.exports = new Sequelize(database, owner, password,{
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false, 
  define: {
    timestamps: false
},

  pool:{
      max:5,
      min:0,
      acquire: 30000,
      idle:10000,
  }
});

