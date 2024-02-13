// importing DataTypes for defining Data types
const {  DataTypes } = require('sequelize');

// importing connection for defining post schema
const { connection } = require('../config/db');


// define postModal
const postModal = connection.define('posts', {
    id:{type:DataTypes.INTEGER},
    name:{type:DataTypes.STRING},
    title:{type:DataTypes.STRING},
    body:{type:DataTypes.STRING},
    company:{type:DataTypes.STRING},
   
  });
  

// to sync post table with cointab db
connection.sync()

module.exports = postModal;
