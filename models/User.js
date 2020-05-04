const Sequelize = require('sequelize');

const connection = require ("../database") // the commented line is replaced by db.js

module.exports = connection.define('user',{ // lowercase user is the name of the table in postgres
    username: {
        type: Sequelize.TEXT, 
       },
    age: {
        type:Sequelize.INTEGER
    },
    height: {
        type: Sequelize.INTEGER,},

    gender: {
          type: Sequelize.STRING
        },
  
},
{
  freezeTableName: true  // issues with postgres for plural
});

