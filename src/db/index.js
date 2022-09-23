/* eslint-disable no-async-promise-executor */
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: String(process.env.DB_TYPE)
  });

  module.exports.connectToDataBase = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await sequelize.authenticate();
            console.log('DataBase connection has been established successfully');
            resolve();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            reject();
        }
    });
  };