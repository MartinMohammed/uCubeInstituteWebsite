// --------------------- MYSQL DATABASE CONNECTION POOL WITH SEQUELIZE ------------
// Import sequelize class / constructor to instantiate the DATABASE CONNECTION POOL
const sequelize = require("Sequelize").Sequelize;
require("dotenv").config();

const { DATABASE_PASSWORD, DATABASE_HOST, DATABASE_NAME, DATABASE_USER } =
  process.env;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    dialect: "mysql",
    host: DATABASE_HOST,
  }
);

// default export
module.exports = sequelize;
