// ---------- IMPORT/REQUIRE MODULES ----------
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();
const csrf = require("csurf");

// TODO: - SESSION
// const session = require('session')

// TODO: - SESSION STORE
// const MongoDBStore = require("connect-mongodb-session")(session)

// ENVIRONMENT VARIABLES
const { SERVER_PORT } = process.env;

// UTIL
const mongooseConnect = require("./util/database").mongooseConnect;

// CUSTOM MIDDLEWARE
const errorHandling = require("./middleware/errorHandling");

// MVC - ROUTES
const publicRoutes = require("./routes/public");
const adminRoutes = require("./routes/admin");

const app = express();

// ------------- REGISTER MIDDLEWARE -------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// TODO: MULTER CONFIG
app.set("view engine", "ejs");

// TODO: ADD LOGING WITH MORGAN
// * DEFAULT SETTINGS
app.use(compression());
app.use(helmet());

// TODO: CONFIGURE CSRF
// app.use(csrf());

// ROUTE FILTERING
app.use("/admin", adminRoutes);
app.use("/", publicRoutes);

// * SPECIAL TYPE OF MIDDLEWARE - ERROR HANDLING WITH 4 ARGUMENTS
app.use(errorHandling);

// make connection with database
mongooseConnect(() => {
  // TODO: IMPLEMENT sequelize.sync().then(() => {app.listen}) | so that the server only starts when the sync was successfully
  app.listen(SERVER_PORT, () =>
    console.log(`SERVER IS SUCCESSFULLY LISTENING AT PORT: ${SERVER_PORT}`)
  );
});
