// importing DataTypes for defining Data types
const {  DataTypes } = require('sequelize');

// importing connection for defining users schema
const { connection } = require('../config/db');


// define UserModel
const UserModel = connection.define('users', {
    id:{type:DataTypes.INTEGER,primaryKey:true},
    name:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    phone:{type:DataTypes.STRING},
    website:{type:DataTypes.STRING},
    city:{type:DataTypes.STRING},
    company:{type:DataTypes.STRING},
    createdAt:{type:DataTypes.DATE},
    updatedAt:{type:DataTypes.DATE}
  });
  


// to sync users table with cointab db
connection.sync()

module.exports = UserModel;
