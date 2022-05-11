// --------------------- MYSQL DATABASE CONNECTION POOL WITH SEQUELIZE ------------
// Import sequelize class / constructor to instantiate the DATABASE CONNECTION POOL

require("dotenv").config();
// const mondgodb = require("mongodb");
const mongoose = require("mongoose");

const { MONGO_DATABASE_PASSWORD, MONGO_DATABASE_NAME, MONGO_DATABASE_USER } =
  process.env;

const MONGO_URI = `mongodb+srv://${MONGO_DATABASE_USER}:${MONGO_DATABASE_PASSWORD}@cluster0.pqvdc.mongodb.net/${MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;

// CONNECTION POOL ; MONGO DATABASE
const mongooseConnect = (cb) => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Successful connected to Mongo Database!. ");
      // cb() = app.listen(PORT)
      cb();
    })
    .catch((err) => {
      console.log(err);
    });
};

// default export
module.exports = {
  mongooseConnect: mongooseConnect,
};
